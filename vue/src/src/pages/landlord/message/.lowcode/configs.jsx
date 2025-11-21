export default {
  url: "/do/list/landlord_house",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'landlord/message',
  title: "业主信息",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"landlordId","label":"业主","type":"search","depend":"landlord"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"houseType","label":"住宅人员类型","code":"landorType"},{"name":"commreceType","label":"店铺人员类型","code":"commerceLType"},{"name":"isOwner","label":"是否为产权人","type":"switch"}],
  columns: ["landlordId","houseType"],
  condition: ["landlordId"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='7f1zzv05n4w' label='添加业主' mode='dialog' fields={["landlordId","houseType"]} type='primary' url='/do/put/landlord_house' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='gxxiczeh0ww' label='详情' data={row} mode='drawer' href='/daily/houseLandlord' link map={{"id":"landlordId"}} />
<z-action p='ydr80e7pvt4' label='编辑' mode='dialog' fields={["landlordId"]} link data={row} url='/do/patch/landlord_house' />
<z-action p='3jb1n3i3sz4' label='删除' mode='confirm' link data={row} url='/do/delete/landlord_house' />
        </>
      )
    }
  }
}
  