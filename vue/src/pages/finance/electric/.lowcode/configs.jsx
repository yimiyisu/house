export default {
  url: "/do/select/electric_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/electric',
  title: "电费管理",
	tabs: {"code":"payStatus","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"equipment","label":"设备编号"},{"name":"number","label":"本期度数","type":"number"},{"name":"feeId","label":"费率","type":"search","depend":"fee_plain"},{"name":"cash","label":"金额"},{"name":"dueTime","label":"应缴日期","type":"date"},{"name":"payTime","label":"缴费日期","type":"date"},{"name":"status","label":"缴费状态","code":"payStatus"},{"name":"tradeId","label":"支付单号"},{"name":"comunityId","label":"社区","type":"search","depend":"community"},{"name":"type","label":"类型","code":"cfg_electricType"},{"name":"payId","label":"支付id"}],
  columns: ["creator","createGmt","houseId","equipment","number","feeId","type","cash","dueTime","status","payTime"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='10huyav8' label='新增记录' mode='dialog' fields={["houseId","equipment","feeId","type","number","dueTime"]} rules={{"houseId":{"message":"请输入正确内容","required":true},"equipment":{"message":"请输入正确内容","required":true},"feeId":{"message":"请输入正确内容","required":true},"type":{"message":"请输入正确内容","required":true},"number":{"message":"请输入正确内容","required":true}}} url='/api/fee/addWaterLog' title='新增记录' />
        </>
      )
    },
    
  }
}
  