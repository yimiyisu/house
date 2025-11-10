<template>
  <z-form-items :fields="fields" />
</template>
<script>
export default {
  data() {
    return {
      fields: [
        { name: 'constant', label: '临时车费率', type: 'money', tip: '每小时' },
        {
          name: 'configs', label: '费率配置', type: 'table', fields: [
            { name: 'title', label: '类型', type: 'select', code: 'cfg_parkingType' },
            { name: 'price', label: '单价', type: 'money' }
          ]
        }
      ]
    }
  }
}
</script>
