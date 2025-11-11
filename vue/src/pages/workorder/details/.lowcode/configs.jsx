export default {
  url: "/do/list/work_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'workorder/details',
  title: "工单详情",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"uid","label":"受理人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"workorderId","label":"工单ID","type":"search","depend":"workorder"},{"name":"record","label":"处理记录","type":"textarea"},{"name":"image","label":"图片","type":"inputTag"}],
  columns: [],
  condition: [],
  slots: {
    
  }
}
  