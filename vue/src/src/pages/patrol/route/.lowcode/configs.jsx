export default {
  url: "/do/select/patrol_route",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'patrol/route',
  title: "巡检路线",
	tabs: {"code":"patrolType","list":[],"keyword":"type"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"type","label":"路线类型","code":"patrolType"},{"name":"title","label":"路线名称"},{"name":"communityId","label":"小区id","type":"search","depend":"community"}],
  columns: ["title","type","creator"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='0utnein1oj5' label='添加' mode='dialog' fields={["title","type"]} type='primary' url='/do/put/patrol_route' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='4cfftj1kwsk' label='巡检点' data={row} mode='drawer' href='/patrol/points' link map={{"routeId":"id"}} />
<z-action p='ofpbfqhwm8s' label='编辑' mode='dialog' fields={["title","type"]} link data={row} url='/do/patch/patrol_route' />
<z-action p='i41bmfuzo17' label='删除' mode='confirm' link data={row} url='/do/delete/patrol_route' />
        </>
      )
    }
  }
}
  