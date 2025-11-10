<template>
    <div>
        <z-block url="/api/home/makeLink" :params="data">
        <template #default="data">
            <z-copy label="复制链接" :value="data" style="width:100%;margin-bottom:6px;text-align: center; width: 100%" />
            <z-qr :value="data" height="160px" width="160px"/>
            <div style="text-align: center; width: 100%;">
                二维码有效期十分钟
            </div>
        </template>
        </z-block>
         <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
          <el-button type="primary" @click="refresh">刷新二维码</el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: Object
    },
    data() {
        return {
            params:this.data
        }
    },
    methods: {
        refresh() {
            this.params = {...this.data, temp: 0};
        }
    },
}
</script>