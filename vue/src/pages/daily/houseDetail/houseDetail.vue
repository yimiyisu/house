<template>
    <el-descriptions title="住宅明细">
        <el-descriptions-item label="房屋编号">{{
            params.houseId
        }}</el-descriptions-item>
        <el-descriptions-item label="状态">
            自主
            <el-tag @click="toLack" v-if="arrearsCount > 0" type="danger" effect="dark"> 有欠费 </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="业主">{{
            !landlord ? "暂无" : landlord.title
        }}</el-descriptions-item>
        <el-descriptions-item label="联系手机号">
            <el-tag size="small">{{
                !landlord ? "暂无" : landlord.telephone
            }}</el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="水表">
            {{ equipments.water }}
            <z-action icon="edit" size="small" text width="450px" url="/api/home/hydropower" :fields="['water']"
                :data="{ id: params.houseId }" @finish="fin">
            </z-action>
        </el-descriptions-item>

        <el-descriptions-item label="电表">
            {{ equipments.electricity }}
            <z-action icon="edit" size="small" text width="450px" url="/api/home/hydropower" :fields="['electricity']"
                :data="{ id: params.houseId }" @finish="fin">
            </z-action>
        </el-descriptions-item>
    </el-descriptions>
    <el-tabs v-model="pane" v-if="params">
        <el-tab-pane label="业主管理" lazy name="person">
            <z-block href="/landlord/message" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="车辆信息" lazy name="car">
            <z-block href="/landlord/parkingApply" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="宠物登记" name="pet">
            <z-block href="/daily/pet" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="电车登记" name="battery">
            <z-block href="/daily/batteryCarts" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="出租记录" lazy name="rent">
            <z-block href="/daily/houseRent" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="缴费记录" lazy name="fee">
            <z-block href="/daily/payment" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="欠费明细" lazy name="lack">
            <z-block href="/daily/arrears" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="报修记录" lazy name="repair">
            <z-block href="/daily/repair" :params="params" />
        </el-tab-pane>
        <!-- <el-tab-pane label="合同管理" lazy name="contract">Task</el-tab-pane> -->
    </el-tabs>
</template>

<script>

export default {
    inheritAttrs: false,

    props: {
        params: Object,
    },

    data() {
        return {
            landlord: null,
            pane: "person",
            equipments: "",
            arrearsCount: 0
        };
    },

    async created() {

        this.landlord = await $.get({
            url: "/api/landlord/landlord",
            data: { houseId: this.params.houseId, isOwner: 1 },
        });

        this.equipments = await $.get({
            url: "/do/get/house",
            data: { houseId: this.params.houseId },
        });

        this.arrearsCount = await $.get({
            url: "/do/count/bills",
            data: { houseId: this.params.houseId },
        });
    },

    methods: {
        toLack() {
            this.pane = "lack";
        },

        fin(result, data) {
            if (data.water) {
                this.equipments.water = data.water
            } else {
                this.equipments.electricity = data.electricity
            }
        },
    },
};
</script>
