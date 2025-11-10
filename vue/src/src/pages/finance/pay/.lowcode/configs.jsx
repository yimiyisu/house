export default {
  url: "/do/get/pay_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/pay',
  title: "支付流水",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"order","label":"订单号"},{"name":"amount","label":"交易金额","type":"number"},{"name":"type","label":"支付类型","code":"payType"},{"name":"status","label":"支付状态","code":"payStatus"},{"name":"desc","label":"描述"},{"name":"transactionTime","label":"交易时间","type":"date"}],
  columns: ["order","amount","type","transactionTime","status","desc"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加' mode='dialog' fields={["order","amount","type","transactionTime","status","desc"]} type='primary' url='/do/put/pay_log' />
<z-action label='修改' mode='dialog' fields={["order","amount","type","transactionTime","status","desc"]} type='primary' url='/do/patch/pay_log' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='修改' mode='dialog' fields={["order","amount","type","transactionTime","status","desc"]} link data={row} url='/do/patch/pay_log' />
<z-action label='删除' mode='confirm' link data={row} url='/do/delete/pay_log' />
        </>
      )
    }
  }
}
  