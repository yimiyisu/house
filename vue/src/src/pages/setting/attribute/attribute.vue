<template>
  <z-table name="7bhmlw8g" :entitys="entitys">
  </z-table>
</template>
<script>
import configs from './.lowcode/configs';

export default {
  name: 'p-7bhmlw8g',
  provide: { configs },
  data() {
    return {
      entitys: {
        options: {
          type: 'table',
          visible: (formData) => formData.type > 1,
          default: [],
          fields: [{
            label: '选择值',
            name: 'value'
          }]
        }
      }
    }
  },
}
</script>
