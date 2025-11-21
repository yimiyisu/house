export default {
  url: "/do/list/patrol_points",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'patrol/points',
  title: "巡检点",
  entitys: [{"name":"id","label":"id","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"巡检点"},{"name":"creator","label":"创建人","type":"user"},{"name":"routeId","label":"巡检路线","type":"search","depend":"patrol_route"}],
  columns: ["title","creator","createGmt"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加巡检点' mode='dialog' fields={["title"]} type='primary' url='/do/put/patrol_points' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='删除' mode='confirm' link data={row} url='/do/delete/patrol_points' />
        </>
      )
    }
  }
}
  