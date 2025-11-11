<template>
  <z-table name="s2bmjhi5">
  </z-table>
</template>

<script>
import configs from './.lowcode/configs'
$.extend(configs, { landlordId: { type: 'search', params:{is_enabled : "1"} } })

export default {
  name: 'p-s2bmjhi5',
  provide: { configs },
  data() {
    return {

    }
  },
}
</script>
    