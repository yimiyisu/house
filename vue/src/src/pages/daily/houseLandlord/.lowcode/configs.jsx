export default {
  url: "/do/get/landlord",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/houseLandlord',
  title: "业主详情",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"用户","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"telephone","label":"手机号"},{"name":"title","label":"姓名"},{"name":"isEnabled","label":"是否启用","type":"switch"},{"name":"idcard","label":"身份证"}],
  columns: ["title","telephone","idcard","isEnabled"],
  condition: [],
  slots: {
    header$() {
      return (
        <>
        <z-action label='添加' mode='dialog' fields={["title","telephone","idcard"]} type='primary' url='/do/put/landlord' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='修改' mode='dialog' fields={["title","telephone","idcard","isEnabled"]} link data={row} url='/do/patch/landlord' />
<z-action label='删除' mode='confirm' link data={row} url='/do/delete/landlord' />
        </>
      )
    }
  }
}
  