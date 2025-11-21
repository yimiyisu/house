<template>
  <z-table name="xnqly1w4">
    <template #addCarLog>
      <z-form-items :fields="fields" :rules="rules" />
    </template>
  </z-table>
</template>

<script>
import configs from './.lowcode/configs'
export default {
  name: 'p-xnqly1w4',
  provide: { configs },
  data() {
    return {
      fields: [
        { name: 'month', label: '租赁时长', type: 'number', tip: '以月为单位' }
      ],
      rules: {
        month: { message: '请输入数字', required: true, type: 'number' }
      }
    }
  },
}
</script>