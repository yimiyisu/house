<template>
    <z-table name="3g2agfub">
    </z-table>
</template>

<script>
import configs from './.lowcode/configs';
$.extend(configs, { landlordId: { tenant: 'communityId' }, houseId: { tenant: 'communityId', params: { isCommerce: 0 } } })

export default {
    name: 'p-3g2agfub',
    provide: { configs },
    data() {
        return {}
    },
}
</script>
