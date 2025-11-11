export default {
  url: "/do/select/equipment_area",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'equipment/area',
  title: "设备区域",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"区域名称"},{"name":"parentId","label":"父级id","type":"search","depend":"equipment_area"},{"name":"isLeaf","label":"是否是底部区域","type":"switch"},{"name":"communityId","label":"所属小区","type":"search","depend":"community"}],
  columns: [],
  condition: [],
  slots: {
    
  }
}
  