<template>
  <z-page-title value="在线申请类型配置" />
  <el-tabs v-model="current" type="card">
    <el-tab-pane v-for="app in list" :key="app.id" :label="app.label" :name="app.value" />
  </el-tabs>
  <z-block href="/setting/attribute" :params="{ applyType: current === null ? defaultCurrent : current }" />
</template>
<script>
export default {
  inject: ["$dict"],
  data() {
    return {
      dictList: [],
      current: null
    }
  },
  computed: {
    list() {
      const res = this.$dict("cfg_applyType");
      return res.v || []
    },
    defaultCurrent() {
      return this.list.length > 0 ? this.list[0].value : null;
    }
  },
  mounted() {
    if (this.current === null && this.defaultCurrent) {
      this.current = this.defaultCurrent;
    }
  }
}
</script>