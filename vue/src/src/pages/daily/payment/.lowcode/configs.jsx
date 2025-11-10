export default {
  url: "/do/select/bills",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/payment',
  title: "缴费记录",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"houseId","label":"房间","type":"search","depend":"house"},{"name":"type","label":"类型","code":"billType"},{"name":"status","label":"状态","code":"costStatus"},{"name":"cost","label":"金额","type":"money"},{"name":"paylogId","label":"详情","type":"search","depend":"pay_log"}],
  columns: ["createGmt","type","cost","status"],
  condition: [],
  slots: {
    
  }
}
  