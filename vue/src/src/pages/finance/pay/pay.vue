<template>
  <!-- <z-table name="h9ogaa5f">
  </z-table> -->
  <z-action
    style="margin-left: 20px; margin-bottom: 20px"
    label="修改"
    mode="dialog"
    :data="this.payLog"
    :fields="['order', 'amount', 'type', 'transactionTime', 'status', 'desc']"
    type="primary"
    url="/do/patch/pay_log"
    title="修改账单明细"
  />

  <el-descriptions title="账单明细" :column="2" border>
    <el-descriptions-item label="订单号" label-align="center" align="center">
      {{ payLog?.order ? payLog.order : '无' }}
    </el-descriptions-item>
    <el-descriptions-item label="交易金额" label-align="center" align="center">
      {{ payLog?.amount ? payLog.amount : '无' }}
    </el-descriptions-item>
    <el-descriptions-item label="支付方式" label-align="center" align="center">
      <el-tag size="small">{{ payLog?.type ? payLog.type : '无' }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="支付状态" label-align="center" align="center">
      {{ payLog?.status ? payLog.status : '无' }}
    </el-descriptions-item>
    <el-descriptions-item label="交易时间" label-align="center" align="center">
      {{ payLog?.transactionTime ? payLog.transactionTime : '无' }}
    </el-descriptions-item>
    <el-descriptions-item label="描述" label-align="center" align="center">
      {{ payLog?.desc ? payLog.desc : '无' }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import configs from "./.lowcode/configs";

export default {
  name: "p-h9ogaa5f",
  provide: { configs },
  props: {
    params: Object,
  },
  data() {
    return {
      payLog: [],
    };
  },

  async created() {
    this.payLog = await $.get({
      url: "/do/get/pay_log",
      data: { id: this.params.id },
    });
  },
};
</script>
