export default {
  url: "/do/select/landlord",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/commerceLandlord',
  title: "商业区人员详情",
  entitys: [{"name":"id","label":"用户","type":"user"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"telephone","label":"手机号"},{"name":"title","label":"姓名"},{"name":"isEnabled","label":"是否启用","type":"switch"},{"name":"idcard","label":"身份证"}],
  columns: [],
  condition: [],
  slots: {
    
  }
}
  