<template>
  <z-table name="csfynanc">
  </z-table>
</template>

<script>
import configs from './.lowcode/configs';
$.extend(configs, { houseId: { tenant: 'communityId' } })

export default {
  name: 'p-csfynanc',
  provide: { configs },
  data() {
    return {}
  },
}
</script>
