<template>
  <z-table name="yk24gzx96ji" mocked :condition="condition">
  </z-table>
</template>

<script>
import configs from './.lowcode/configs';

export default {
  name: 'p-yk24gzx96ji',
  provide: { configs },
  data() {
      return {
        condition: ["licensePlate", "isEnter", { name: "time", label: '来访时间区间', type: 'daterange' }],
    }
  },
}
</script>
