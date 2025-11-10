export default {
  url: "/do/select/landlord_apply",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 220,
  path: 'landlord/invite',
  title: "住户申请",
	tabs: {"list":[{"label":"待审核","value":"0","id":"qiaosc1xvj9"},{"label":"通过","value":"1","id":"exufb545is3"},{"label":"未通过","value":"2","id":"h90otvzyfud"}],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"被邀请人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"名称"},{"name":"telephone","label":"电话"},{"name":"status","label":"状态","code":"applyStatus"},{"name":"commuityId","label":"小区","type":"search","depend":"community"},{"name":"type","label":"房屋人员类型","code":"landorType"},{"name":"landlordId","label":"邀请人","type":"search","depend":"landlord"},{"name":"openId","label":"个人标识","type":"textarea"},{"name":"houseId","label":"房产","type":"search","depend":"house"},{"name":"idcard","label":"身份证"}],
  columns: ["title","telephone","status","type","landlordId","houseId"],
  condition: ["telephone"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='t3rlliugvz9' label='添加' mode='dialog' fields={["creator","title","telephone","type","landlordId","openId","houseId"]} type='primary' url='/do/put/landlord_apply_artificial' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='k4sv5w4r0it' label='编辑' mode='dialog' fields={["title","telephone","type","landlordId","openId","houseId","status"]} link data={row} url='/do/patch/landlord_apply' />
<z-action p='37ghukkwgpl' label={row.status == 0?'同意':null} link data={row} url='/api/landlord/handle' />
<z-action p='372ziejcz4l' label={row.status == 0?'不同意':null} link data={row} url='/api/landlord/close' />
<z-action p='af5h8kdl15x' label='删除' mode='confirm' link data={row} url='/do/delete/landlord_apply' />
        </>
      )
    }
  }
}
  