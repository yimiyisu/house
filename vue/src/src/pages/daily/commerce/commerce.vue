<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <z-page-title type="h4" value="商业区位置" />
            <el-tree node-key="id" :current-node-key="defaultArea" highlight-current :data="commerceAreas"
                :props="defaultProps" @node-click="select" />
        </el-col>
        <el-col :span="20">
            <z-block v-if="params" href="/daily/commercelist" :params="params" />
        </el-col>
    </el-row>
</template>

<script>
import configs from './.lowcode/configs';

export default {
    name: 'p-4bvvtpd2',
    provide: { configs },
    data() {
        return {
            params: null,
            tenant: null,
            commerceAreas: [],
            defaultProps: {
                label: 'title',
                children: 'children'
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
    async mounted() {
        this.commerceAreas = await $.get({ url: "/api/area/commerceAreaList" })
    },
    methods: {
        select(node) {
            if (node.isLeaf == 1) {
                this.params = { areaId: node.id }
                this.$router.push({ query: this.params })
            }
        },
    }
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
