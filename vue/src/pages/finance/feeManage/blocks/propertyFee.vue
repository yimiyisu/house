<template>
  <z-form-items :fields="fields" />
</template>
<script>
export default {
  data() {
    return {
      fields: [
        {
          name: 'configs', label: '费率配置', type: 'table', fields: [
            { name: 'title', label: '类型', type: 'select', code: 'cfg_propertyType' },
            { name: 'price', label: '单价', type: 'money' }
          ]
        }
      ]
    }
  }
}
</script>