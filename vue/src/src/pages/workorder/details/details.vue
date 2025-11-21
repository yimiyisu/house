<template>
    <z-page-title />
    <z-block url="/do/list/work_log" :params="params">
        <template #default="data">
            <z-action style="margin-bottom: 20px" label='添加详情' mode='dialog' :fields="fields"
                type='primary' url='/do/put/work_log' title='添加工单详情' />
            <el-timeline style="max-width: 600px">
                <el-timeline-item v-for="(log, index) in data" :key="index"
                    :timestamp="formattedTime(log.createGmt)">
                    {{ log.record }}
                    <div>
                        <z-image v-if="log.image&&log.image.length>0" v-model="log.image" multiple="true" readonly="true"/>
                    </div>
                    <div>
                           处理人:<z-user :modelValue="log.uid"/>
                    </div>
                </el-timeline-item>
            </el-timeline>
        </template>
    </z-block>
</template>

<script>
import configs from './.lowcode/configs';

export default {
    name: 'p-smfo9pv5',
    provide: { configs },
    props: {
        params: Object
    },
    data() {
        return {
            fields: [
                { name: 'record', label: '详情', type: 'textarea' },
                { name: 'image', label: '图片', type: 'image', multiple: true },
            ]
        }
    },
    methods: {
        formattedTime(timestamp) {
            const date = new Date(timestamp * 1000);
            return date.toLocaleString(); // 可以根据需要调整格式
        }
    }

}
</script>
<style>
.bold-label {
    font-size: 16px;   /* 调整字体大小 */
    font-weight: bold; /* 加粗效果 */
    margin-bottom: 10px;
}
</style>
