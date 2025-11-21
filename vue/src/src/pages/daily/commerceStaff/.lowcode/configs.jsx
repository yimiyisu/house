export default {
  url: "/do/list/landlord_house",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 220,
  path: 'daily/commerceStaff',
  title: "店铺人员",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"landlordId","label":"业主","type":"search","depend":"landlord"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"houseType","label":"住宅人员类型","code":"landorType"},{"name":"commreceType","label":"店铺人员类型","code":"commerceLType"},{"name":"isOwner","label":"是否为产权人","type":"switch"}],
  columns: ["landlordId","commreceType"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='dmsva1f7pc2' label='添加人员' mode='dialog' fields={["landlordId","commreceType"]} type='primary' url='/do/put/landlord_house' title='添加人员' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='b4rwzdkobnu' label='详情' data={row} mode='drawer' href='/daily/commerceLandlord' link map={{"id":"landlordId"}} />
<z-action p='r11s914l71a' label='编辑' mode='dialog' fields={["landlordId","commreceType"]} link data={row} url='/do/patch/landlord_house' includeTitle='l' />
<z-action p='120c7poyeod' label='删除' mode='confirm' link data={row} url='/do/delete/landlord_house' />
        </>
      )
    }
  }
}
  