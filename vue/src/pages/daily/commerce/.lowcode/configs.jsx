export default {
  url: "/do/list/commercial_area",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/commerce',
  title: "",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区编号","type":"search","depend":"community"},{"name":"title","label":"区域名称"},{"name":"parentId","label":"父节点","type":"search","depend":"house_area"},{"name":"isLeaf","label":"是否为单元楼","type":"switch"},{"name":"isCommercial","label":"是否是商业区域","type":"switch"}],
  columns: ["title"],
  condition: [],
  slots: {
    
  }
}
  