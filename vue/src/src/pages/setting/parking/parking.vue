<template>
  <z-table name="d7eo9l5x">
    <template #parkingType>
      <z-form-items :fields="fields" />
    </template>
  </z-table>
</template>

<script>
import configs from './.lowcode/configs';

export default {
  name: 'p-d7eo9l5x',
  provide: { configs },
  data() {
    return {
      fields: [
        { name: 'type', type: 'select', label: '车位类型', code: 'cfg_parkingType' },
      ]
    }
  },
}
</script>