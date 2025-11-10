export default {
  url: "/do/select/battery_car",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/batteryCarts',
  title: "电瓶车管理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"车牌号"},{"name":"owner","label":"拥有者","type":"search","depend":"landlord"},{"name":"emergency","label":"紧急联系人"},{"name":"phone","label":"联系电话"},{"name":"houseId","label":"房屋编号","type":"search","depend":"house"}],
  columns: ["title","owner","phone","emergency"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='ge7q0rs2dkx' label='添加' mode='dialog' fields={["title","owner","phone","emergency"]} type='primary' url='/do/put/battery_car' title='添加' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='1e9bwzrsa4y' label='编辑' mode='dialog' fields={["title","owner","phone","emergency"]} link data={row} url='/do/patch/battery_car' />
<z-action p='z36mchad4kq' label='删除' mode='confirm' link data={row} url='/do/delete/battery_car' />
        </>
      )
    }
  }
}
  