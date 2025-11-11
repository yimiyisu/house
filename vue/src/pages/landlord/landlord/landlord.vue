<template>
  <z-table name="5ugxicmx">
    <template #id="{row}">
        <z-user v-model="row.id" readonly />
    </template>
  </z-table>
</template>

<script>
import configs from './.lowcode/configs';

export default {
  name: 'p-5ugxicmx',
  provide: { configs },
  data() {
    return {}
  },
}
</script>
