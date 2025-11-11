import CommerceFee from "./commerceFee.vue";
import ElectricFee from "./electricFee.vue";
import ParkingFee from "./parkingFee.vue";
import PropertyFee from "./propertyFee.vue";
import WaterFee from "./waterFee.vue";
export default {
    props: {
        formData: Object,
    },
    render() {
        const { formData } = this;
        if (!formData || !formData.type) {
            return <div></div>;
        }
        const { type } = formData;
        if (type === "parking") {
            return <ParkingFee />;
        }
        if (type === "electric") {
            return <ElectricFee />;
        }
        if (type === "water") {
            return <WaterFee />;
        }
        if (type === "commerce") {
            return <CommerceFee />;
        }
        if (type === "property") {
            return <PropertyFee />;
        }
        return <div></div>;
    },
    methods: {
        update(modelValue) {
            this.formData["feeConfig"] = modelValue;
        },
    },
};
