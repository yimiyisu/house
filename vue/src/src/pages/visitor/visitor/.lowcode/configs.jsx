export default {
  url: "/do/select/visitor",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 120,
  path: 'visitor/visitor',
  title: "访客中心",
	tabs: {"code":"visitorType","list":[],"keyword":"type"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"入场时间","type":"date"},{"name":"realname","label":"访客姓名"},{"name":"telephone","label":"联系电话"},{"name":"reason","label":"来访目的","type":"textarea"},{"name":"type","label":"来访类型","code":"visitorType"},{"name":"time","label":"来访时间","type":"date"},{"name":"communityId","label":"所属小区","type":"search","depend":"community"},{"name":"isEnter","label":"是否已入场","type":"switch"},{"name":"startTime","label":"有效期起点","type":"date"},{"name":"endTime","label":"有效期终点","type":"date"},{"name":"licensePlate","label":"车牌号"}],
  columns: ["realname","telephone","licensePlate","type","time","isEnter","reason"],
  condition: ["licensePlate","isEnter"],
  slots: {
    
  }
}
  