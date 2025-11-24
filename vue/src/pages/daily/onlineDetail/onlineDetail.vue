<template>
    <z-block url="/do/get/online_apply" :params="params">
        <template #default="item">
            <div class="main">
                <el-descriptions class="margin-top" title="申请明细" :column="2" border label-width="100px">
                    <el-descriptions-item label="申请人" width="130px">
                        <z-avatar :value="item.creator" :plain="false" />
                    </el-descriptions-item>
                    <el-descriptions-item label="申请类型" width="130px">
                        <z-dict v-model="item.type" code="cfg_applyType" readonly />
                    </el-descriptions-item>
                    <el-descriptions-item label="联系电话" width="130px">{{ item.phone }}</el-descriptions-item>
                    <el-descriptions-item label="状态" width="130px">
                        <z-dict v-model="item.status" code="onlineApplyStatus" readonly />
                    </el-descriptions-item>
                    <el-descriptions-item label="申请时间" width="130px">{{ item.createGtm }}</el-descriptions-item>
                    <el-descriptions-item v-if="item.reason" label="驳回原因" width="130px">{{ item.reason
                    }}</el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="extra">
                <el-descriptions class="margin-top" title="其他信息" :column="1" border label-width="20px">
                    <el-descriptions-item label="图片">
                        <z-image v-model="item.image" readonly />
                        <div v-for="value in item.extra.image" :key="value">
                            <el-image style="width: 100px; height: 100px" :src="value" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="其他信息" width="130px">{{ item.extra.note }}</el-descriptions-item>
                    <el-descriptions-item label="附件" width="130px">{{ item.extra.attach }}</el-descriptions-item>
                </el-descriptions>
            </div>
        </template>
    </z-block>
</template>

<script>
import { provide } from 'vue';
import configs from './.lowcode/configs';

export default {
    name: 'p-e14aj4de',
    setup() {
        provide('configs', configs)
    },
    props: {
        params: Object
    }
}
</script>
<style>
.main {
    margin-bottom: 15px;
}
</style>
