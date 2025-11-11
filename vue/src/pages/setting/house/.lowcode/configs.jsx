export default {
  url: "/do/list/house_area",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/house',
  title: "房屋管理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区编号","type":"search","depend":"community"},{"name":"title","label":"区域名称"},{"name":"parentId","label":"父节点","type":"search","depend":"house_area"},{"name":"isLeaf","label":"是否为单元楼","type":"switch"},{"name":"isCommercial","label":"是否是商业区域","type":"switch"}],
  columns: [],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加' mode='dialog' fields={["communityId","title","isLeaf"]} type='primary' url='/do/put/house_area' title='添加区域' />
        </>
      )
    },
    
  }
}
  