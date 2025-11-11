<template>
    <div class="comm" v-if="list">
        <z-text v-if="list.length === 1" class="title" depend="community" :modelValue="tenant" />
        <el-dropdown v-else @command="select">
            <span class="title">
                <z-text depend="community" :modelValue="tenant" /><z-icon value="chevronDown" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="item in list" :key="item.communityId" :command="item.communityId">
                        <z-icon v-if="item.communityId === tenant" value="check" />
                        <z-text depend="community" :modelValue="item.communityId" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    data() {
        return { list: null, tenant: null, title: null };
    },
    async created() {
        this.tenant = $.tenant();
        if (!this.tenant) {
            return;
        }
        let isExist = false;
        this.list = await $.get({ url: "/do/list/myCommunityManager" });
        this.list.forEach((item) => {
            if (item.communityId === this.tenant) {
                isExist = true;
            }
        });
        if (!isExist) {
            $.tenant("");
            window.location.reload();
        }
    },
    methods: {
        select(val) {
            if (val === this.tenant) {
                return;
            }
            $.tenant(val);
            window.location.reload();
        },
    },
};
</script>
<style lang="scss" scoped>
.comm {
    display: inline-block;
    margin-right: 8px;
}

.title {
    display: inline-block;
    line-height: 40px;
    color: var(--a-color-white);

    .a-text {
        color: var(--a-color-white) !important;
    }

    .a-icon {
        margin-left: 3px;
        transform: translateY(2px);
    }
}
</style>
