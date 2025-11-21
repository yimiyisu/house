export default {
  url: "",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/house',
  title: "住宅区管理",
  entitys: [{"name":"id","label":"房屋编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"areaTitle","label":"所属位置"},{"name":"structure","label":"户型结构","code":"houseStructure"},{"name":"type","label":"房屋类型","code":"cfg_houseType"},{"name":"areaId","label":"住宅区","type":"search","depend":"house_area"},{"name":"title","label":"名称"},{"name":"status","label":"状态","code":"commerceType"},{"name":"water","label":"水表"},{"name":"electricity","label":"电表"}],
  columns: [],
  condition: [],
  slots: {
    
  }
}
  