export default {
  url: "/do/select/online_apply",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/onlineApply',
  title: "在线申请",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"申请人","type":"user"},{"name":"createGmt","label":"申请时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"phone","label":"联系电话"},{"name":"type","label":"申请类型","code":"cfg_applyType"},{"name":"config","label":"其它信息","type":"inputTag"},{"name":"communityId","label":"社区id","type":"search","depend":"community"},{"name":"status","label":"申请状态","code":"onlineApplyStatus"},{"name":"reason","label":"驳回原因","type":"textarea"}],
  columns: ["creator","createGmt","phone","type","status"],
  condition: [],
  slots: {
    action$({ row }) {
      return (
        <>
          <z-action p='w3i8gu5t' label='申请明细' data={row} mode='drawer' href='/daily/onlineDetail' link map={{"id":"id"}} />
        </>
      )
    }
  }
}
  