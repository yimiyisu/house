<template>
  <z-table name="lnkifnnu">
  </z-table>
</template>
<script>
import configs from './.lowcode/configs';
$.extend(configs, { houseId: { tenant: 'communityId' } })

export default {
  name: 'p-lnkifnnu',
  provide: { configs },
  data() {
    return {
    }
  },
}
</script>
