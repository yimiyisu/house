<template>
    <z-page-title value="房屋管理" />
    <el-row :gutter="20">
        <el-col :span="6">
            <z-action label="添加区域" url="/do/put/house_area" :fields="['title', 'isLeaf']" @finish="(result) => addFinish(result, node)" />
            <el-tree ref="tree" node-key="id" :props="props" :load="loadNode" :current-node-key="defaultArea" highlight-current lazy>
                <template #default="{ data, node }">
                    <span class="custom-tree-node">
                        <div class="title" @click="select(data, node)">{{ data.title }}
                        </div>
                        <div class="actions">
                            <z-action icon="plus" type="text" v-if="data.isLeaf == 0" :title="'添加' + data.title + '子区域'"
                                url="/do/put/house_area" :data="{ parentId: data.id }" :fields="['title', 'isLeaf']"
                                @finish="(result) => addFinish(result, node)" />
                            <z-action icon="edit" type="text" :title="'修改' + data.title + '子区域'"
                                url="/do/patch/house_area" :data="data" :fields="['title']"
                                @finish="(result) => edit(result, node)" />
                            <z-action icon="x" type="text" url="/do/delete/house_area" mode="confirm" :data="data"
                                :title="'刪除' + data.title + '区域'" @finish="(result) => remove(result)"/>
                        </div>
                    </span>
                </template>
            </el-tree>
        </el-col>
        <el-col :span="18">
            <z-block v-if="params" href="/setting/room" :params="params" />
        </el-col>
    </el-row>
</template>

<script>
import configs from './.lowcode/configs';

export default {
    inheritAttrs: false,
    name: 'p-1gdpminqwls',
    provide: { configs },
    data() {
        return {
            params: null,
            defaultArea: null,
            tenant: null,
            props: {
                isLeaf: function (data) {
                    return data.isLeaf === 1
                }
            }
        }
    },

    async created() {
        this.tenant = $.tenant();
        const { areaId } = this.$route.query
        if (areaId) {
            this.defaultArea = areaId
            this.params = { areaId }
        }
    },

    methods: {
        select(data, node) {
            if (data.isLeaf == 1) {
                const result = this.nodePath(node, [])
                const areaTitle = result.join('，')
                this.params = { areaId: data.id, areaTitle }
                this.$router.push({ query: {areaId: data.id} })
            }
        },

        nodePath(node, result) {
            const { data, parent } = node
            if (parent === null) {
                return result
            }
            result.unshift(data.title)
            return this.nodePath(parent, result)
        },

        async loadNode(node, callback) {
            const result = await $.get({ url: "/do/list/house_area", data: { parentId: node.data.id } })
            callback(result)
        },

        async addFinish(result, node) {
            if (node) {
                if (!node.loaded) {
                    // 当节点还未加载时，把新添加的子节点暂存起来
                    node.newChildren = node.newChildren || [];
                    if (!node.newChildren.some(child => child.id === result.id)) {
                        node.newChildren.push(result);
                    }
                    // 你可以选择是否主动展开节点以触发加载
                    // node.expand();
                } else {
                    // 节点已加载，则直接追加前先检查是否重复
                    const exists = node.childNodes.some(child => child.data.id === result.id);
                    if (!exists) {
                        this.$refs.tree.append(result, node);
                    }
                }
            } else {
                this.$refs['tree'].append(result)
            }
            this.cleanCache()
        },

        edit(result, node) {
            node.data.title = result.title
            this.cleanCache()
        },

        remove(result) {
            this.$refs['tree'].remove(result.id)
            console.log(result)
            this.cleanCache()
        },

        async cleanCache() {
            await $.get({ url: "/api/area/cleanCache", data: { key: "house" } })
        }
    },
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
    flex: 1;
    display: flex;
    height: 32px;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
}

.title {
    flex: 1
}

.actions {
    width: 80px;
    text-align: right;
}

:deep(.z-action-text) {
    padding-left: 8px;
}
</style>
