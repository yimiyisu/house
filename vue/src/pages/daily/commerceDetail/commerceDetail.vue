<template>
    <el-descriptions title="商业明细">
        <el-descriptions-item label="房屋编号">
            {{ params.houseId }}
        </el-descriptions-item>
        <el-descriptions-item label="状态">
            自主
            <el-tag @click="toLack" v-if="arrearsCount > 0" type="danger" effect="dark"> 有欠费 </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="租户">
            {{ !this.landlord ? "暂无" : this.landlord.title }}
        </el-descriptions-item>
        <el-descriptions-item label="联系手机号">
            <el-tag size="small">
                {{ !this.landlord ? "暂无" : this.landlord.telephone }}
            </el-tag>
        </el-descriptions-item>

        <el-descriptions-item label="水表">
            <z-action icon="edit" size="small" :label="this.equipments.water" width="450px" url="/do/patch/house"
                :fields="['water']" :data="{ id: params.houseId }" @finish="fin">
            </z-action>
        </el-descriptions-item>

        <el-descriptions-item label="电表">
            <z-action icon="edit" size="small" :label="this.equipments.electricity" width="450px" url="/do/patch/house"
                :fields="['electricity']" :data="{ id: params.houseId }" @finish="fin">
            </z-action>
        </el-descriptions-item>

        <el-descriptions-item label="地址">
            {{ this.address }}
        </el-descriptions-item>
    </el-descriptions>
    <el-tabs v-model="pane">
        <el-tab-pane label="人员明细" name="person">
            <z-block href="/daily/commerceStaff" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="车辆信息" name="car">
            <z-block href="/daily/car" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="租赁缴费" name="rent">
            <z-block href="/daily/rent" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="电车登记" name="battery">
            <z-block href="/daily/batteryCarts" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="水电明细" name="moreFee">
            <z-block href="/daily/hydropower" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="报修记录" name="repair">
            <z-block href="/daily/repair" :params="params" />
        </el-tab-pane>
        <el-tab-pane label="合同记录" name="contract">Task</el-tab-pane>
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
            pane: "person",
            equipments: "",
            community: "",
            address: "",
            landlord: null,
            arrearsCount: null
        };
    },

    async created() {
        this.landlord = await $.get({
            url: "/api/landlord/landlord",
            data: { houseId: this.params.houseId, isOwner: 1 },
        });

        this.community = await $.get({
            url: "/do/get/community",
        });
        this.equipments = await $.get({
            url: "/do/get/house",
            data: { houseId: this.params.houseId },
        });
        const list = this.community.address;
        if (list != undefined) {
            list.forEach((item) => (this.address += item.label));
        }

        this.arrearsCount = await $.get({
            url: "/do/count/bills",
            data: { houseId: this.params.houseId },
        });
    },

    methods: {
        toLack() {
            this.pane = "rent";
        },

        fin(result, data) {
            if (data.water) {
                this.equipments.water = data.water;
            } else {
                this.equipments.electricity = data.electricity;
            }
        },
    },
};
</script>
