export default {
  url: "/do/list/car",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'setting/car',
  title: "车辆信息",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"createGmt","label":"登记时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"model","label":"品牌型号"},{"name":"title","label":"车牌号"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"parkingId","label":"车位","type":"search","depend":"parking"}],
  columns: ["houseId","model","title"],
  condition: ["houseId"],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加车辆' mode='dialog' fields={["houseId","model","title"]} type='primary' url='/do/put/car' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='修改' mode='dialog' fields={["houseId","model","title"]} link data={row} url='/do/patch/car' />
<z-action label='删除' mode='confirm' link data={row} url='/do/delete/car' />
        </>
      )
    }
  }
}
  