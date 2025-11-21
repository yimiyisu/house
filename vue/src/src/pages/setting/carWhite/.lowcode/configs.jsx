export default {
  url: "/do/select/car_white",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/carWhite',
  title: "车辆白名单",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"车牌号"},{"name":"name","label":"联系人"},{"name":"phone","label":"联系电话"},{"name":"communityId","label":"社区id","type":"search","depend":"community"}],
  columns: ["title","name","phone"],
  condition: ["title","phone"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='2grbx5kr' label='新增车辆' mode='dialog' fields={["title","name","phone"]} url='/do/put/car_white' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='zgfzttb4' label='删除' mode='confirm' link data={row} url='/do/delete/car_white' />
<z-action p='qnnzk2sj' label='修改' mode='dialog' fields={["name","phone"]} link data={row} url='/do/patch/car_white' />
        </>
      )
    }
  }
}
  