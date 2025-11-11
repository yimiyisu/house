<template>
    <z-page-title />
    <el-timeline>
        <z-block url="/do/list/task_detail" :params="params">
            <template #default="data">
                <el-timeline-item v-for="(detail, index) in data" :key="index" :type="primary">
                    <el-descriptions title="巡检记录" column="3" label-width="60px">
                        <template #title>
                            <z-text depend="patrol_points" :modelValue="detail.pointsId"
                                style="font-size: 18px; font-weight: bold" />
                            <z-action style="margin-left: 20px; margin-bottom: 20px" label="修改" mode="dialog"
                                :data="detail" :fields="fileds" type="primary"
                                url="/do/patch/task_detail" title="修改巡检任务详情" />
                        </template>
                        <el-descriptions-item label="巡检状态:">
                            <el-tag size="small">
                                <span :style="detail.isException === 1 ? 'color: red;' : 'color: green;'"
                                    v-if="detail.isException != null">
                                    {{ detail.isException ? "未巡检" : detail.isException === 1 ? "异常" : "正常" }}
                                </span>
                            </el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="巡检时间:">
                            <span v-if="detail.creator != null">
                                {{ formattedTime(detail.updateGmt) }}
                            </span>
                        </el-descriptions-item>
                        <el-descriptions-item label="巡检人:">
                            <z-avatar v-if="detail.creator" :value="detail.creator" :plain="false" size="20px" />
                            <span v-else>暂无</span>
                        </el-descriptions-item>
                        <el-descriptions-item label="巡检图片:">
                            <z-image v-for="(image, index) in detail.image" v-model="image.url" readonly="true"
                                :key="index" />
                        </el-descriptions-item>
                        <el-descriptions-item label="巡检内容:">
                            {{ detail.record }}
                        </el-descriptions-item>
                        <el-descriptions-item label="是否签到:">
                            {{ detail.isClock === 1 ? "已签到" : "未签到" }}
                        </el-descriptions-item>
                    </el-descriptions>
                </el-timeline-item>
            </template>
        </z-block>
    </el-timeline>
</template>

<script>
import configs from "./.lowcode/configs";
import Search from "./search.vue";
$.extend(configs, {
    image: { type: "image", multiple: "true" },
});

export default {
    name: "p-ritnas1h",
    provide: { configs },
    props: {
        params: Object,
    },
    data() {
        return {
            list: null,
            fileds: [
                { label: "巡检人", name: "creator", component: Search, taskId: this.params.taskId },
                { label: "内容", name: "record" },
                { label: "图片", name: "image", type: "image" },
                { label: "是否异常", name: "isException" }
            ],
        };
    },

    methods: {
        formattedTime(timestamp) {
            if (timestamp) {
                const date = new Date(timestamp * 1000);
                return date.toLocaleString(); // 可以根据需要调整格式
            }
        },
    },
};
</script>
