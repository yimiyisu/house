<template>
    <z-block url="/do/get/landlord" :params="params" ref="block">
        <template #default="landlord">
            <el-descriptions :column="3" border>
                <template #title>
                    <z-action label="修改" mode="dialog" :data="landlord" :fields="['title', 'telephone', 'idcard']"
                        type="primary" url="/do/patch/landlord" title="修改人员详情" @finish="finish" />
                </template>
                <el-descriptions-item :rowspan="3" :width="100" label="头像" label-align="center" align="center">
                    <z-avatar :value="landlord.id" size="24px" />
                </el-descriptions-item>
                <el-descriptions-item label="姓名" label-align="center" align="center">
                    {{ landlord.title }}
                </el-descriptions-item>
                <el-descriptions-item label="联系方式" label-align="center" align="center">
                    <el-tag size="small">{{ landlord.telephone }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="身份证" label-align="center" align="center">
                    {{ landlord.idcard }}
                </el-descriptions-item>
                <el-descriptions-item label="是否启用" label-align="center" align="center">
                    {{ landlord.isEnabled === 1 ? '是' : '否' }}
                </el-descriptions-item>
            </el-descriptions>
        </template>
    </z-block>
</template>

<script>
import { provide } from 'vue';
import configs from './.lowcode/configs';

export default {
    name: 'p-tffhkw7x',
    setup() {
        provide('configs', configs)
    },
    props: {
        params: Object,
    },
    data() {
        return {
        }
    },
    methods: {
        finish() {
            this.$refs.block.load()
        }
    },
}
</script>
