<template>
  <z-table name="gpv9ieiz">
    <template #feeConfig="formData">
      <FeeConfig :formData="formData"></FeeConfig>
    </template>
  </z-table>
</template>

<script>
import configs from './.lowcode/configs';
import FeeConfig from './blocks/detail';
export default {
  name: 'p-gpv9ieiz',
  provide: { configs },
  components: {
    FeeConfig
  },
  data() {
    return {

    }
  },
}
</script>