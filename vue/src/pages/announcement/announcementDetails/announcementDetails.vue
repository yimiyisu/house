<template>
    <z-form v-if="showForm" :fields="fields" :data="formData" :url=url :closable="false" />
</template>

<script>
export default {
    props: {
        params: Object,
    },
    computed: {
        url() {
            return this.isNew ? "/do/put/announcement":"/do/patch/announcement";
        }
    },
    data() {
        return {
            showForm: false,
            formData: {},
            fields: [
                { name: 'type', label: '类型', code: 'announcementType' },
                { name: 'title', label: '标题' },
                { name: 'image', label: '图片', type: 'image' },
                { name: 'content', label: '内容', type: 'tiptap' },
            ],
            isNew: true
        };
    },
    async created() {
        const { announcementId } = this.params;
        if (announcementId) {
            this.formData = await $.get({
                url: "/do/get/announcement",
                data: { id: this.params.announcementId },
            });
            this.isNew = false;
        }
        this.showForm = true;
    },
};
</script>
