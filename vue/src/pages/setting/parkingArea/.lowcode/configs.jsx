export default {
  url: "/do/list/parking_area",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/parkingArea',
  title: "车位规划",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"title","label":"区域名称"},{"name":"type","label":"类型","code":"parkingType"},{"name":"isLeaf","label":"是否为最底层","type":"switch"},{"name":"parentId","label":"父节点","type":"search","depend":"parking_area"}],
  columns: ["title","type"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加' mode='dialog' fields={["title","type","isLeaf"]} type='primary' url='/do/put/parking_area' title='添加' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='删除' mode='confirm' link data={row} url='/do/delete/parking_area' />
<z-action label='修改' mode='dialog' fields={["title","type"]} link data={row} url='/do/patch/parking_area' />
        </>
      )
    }
  }
}
  