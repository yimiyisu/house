<template>
    <el-select v-model="selectedValue" filterable placeholder="请输入关键字搜索巡检人" style="width: 240px" @change="updateValue">
        <el-option v-for="item in creatorList" :key="item.id" :label="item.nick" :value="item.id" />
    </el-select>
</template>


<script>
export default {
    props: {
        taskId: String,
        value: Object,
    },
    data() {
        return {
            creatorList: [],
            selectedValue: this.value.creator // 将传入的 value 绑定到本地数据 selectedValue
        };
    },
    async created() {
        // creator基础信息
        const creatorInfo = await $.get({
            url: "/do/list/task_user",
            data: { taskId: this.taskId },
        });
        const creators = creatorInfo.map(item => item.creator)

        // 查名字
        this.creatorList = await $.post({
            url: "/api/zen/nick",
            data: { list: creators }
        })
    },
    methods: {
        updateValue(newValue) {
            console.log(newValue);
            this.$emit('input', newValue); // 当值变化时，触发 input 事件
            this.selectedValue = newValue; // 当父组件的值变化时，更新子组件的值
        }
    },
};
</script>
