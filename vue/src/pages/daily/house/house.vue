<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <z-page-title type="h4" value="住宅区管理" />
            <el-tree node-key="id" :current-node-key="defaultArea" highlight-current :data="houseAreas"
                :props="defaultProps" @node-click="select" />
        </el-col>
        <el-col :span="20">
            <z-block v-if="params" href="/daily/houselist" :params="params" />
        </el-col>
    </el-row>
</template>

<script>
import configs from './.lowcode/configs';

export default {
    name: 'p2ebzofs',
    provide: { configs },
    data() {
        return {
            params: null,
            tenant: null,
            houseAreas: [],
            defaultArea: null,
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
        this.houseAreas = await $.get({ url: "/api/area/houseAreaList" })
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
