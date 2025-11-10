export default {
  url: "/do/select/patrol_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 80,
  path: 'patrol/patrolLog',
  title: "巡检记录",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"pointsId","label":"巡检点ID","type":"search","depend":"patrol_points"},{"name":"record","label":"记录","type":"textarea"},{"name":"image","label":"图片","type":"image"},{"name":"isException","label":"是否异常","type":"switch"},{"name":"isClock","label":"是否打卡","type":"switch"},{"name":"communityId","label":"小区ID","type":"search","depend":"community"},{"name":"recipientId","label":"巡检人","type":"search","depend":"community_manager"}],
  columns: ["pointsId","recipientId","record","image","isException","isClock","createGmt","updateGmt"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='vgn7qpr8' label='添加记录' mode='dialog' fields={["pointsId","image","record","isException","recipientId"]} type='primary' url='/do/put/patrol_log' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='ychpjtzq' label='删除' mode='confirm' link data={row} url='/do/delete/patrol_log' />
        </>
      )
    }
  }
}
  