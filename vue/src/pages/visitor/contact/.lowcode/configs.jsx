export default {
  url: "/do/select/visitor_cont",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'visitor/contact',
  title: "访客联系人",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"姓名"},{"name":"telephone","label":"电话"},{"name":"licensePlate","label":"车牌号"},{"name":"communityId","label":"小区ID","type":"search","depend":"community_manager"}],
  columns: ["title","telephone","licensePlate","creator","createGmt"],
  condition: ["title","telephone","licensePlate"],
  slots: {
    action$({ row }) {
      return (
        <>
          <z-action p='3nq86akq' label='删除' mode='confirm' link data={row} url='/do/delete/visitor_cont' />
        </>
      )
    }
  }
}
  