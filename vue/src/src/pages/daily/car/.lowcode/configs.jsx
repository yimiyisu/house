export default {
  url: "/do/select/car",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/car',
  title: "车辆登记",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"createGmt","label":"登记时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"model","label":"品牌型号"},{"name":"title","label":"车牌号"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"parkingId","label":"车位","type":"search","depend":"parking"}],
  columns: ["title","model","parkingId"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='dnvf8oasd6o' label='添加车辆' mode='dialog' fields={["title","model"]} type='primary' url='/do/put/car' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='eyqmhz8psth' label='编辑' mode='dialog' fields={["title","model","parkingId"]} link data={row} url='/do/patch/car' />
<z-action p='74dslmvosj3' label='删除' mode='confirm' link data={row} url='/do/delete/car' />
        </>
      )
    }
  }
}
  