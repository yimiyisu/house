export default {
  url: "/do/list/task_detail",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'patrol/detail',
  title: "任务详情",
	tabs: {"list":[{"label":"完成","value":"1","id":"lgfa7muaarp"},{"label":"未完成","value":"0","id":"fmjluq4is6p"}],"keyword":"isFinish"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"巡检人","type":"user"},{"name":"createGmt","label":"起止时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"pointsId","label":"巡检点","type":"search","depend":"patrol_points"},{"name":"taskId","label":"任务","type":"search","depend":"patrol_task"},{"name":"record","label":"巡检记录","type":"textarea"},{"name":"image","label":"图片","type":"inputTag"},{"name":"isException","label":"是否异常","type":"switch"},{"name":"isClock","label":"是否打卡","type":"switch"}],
  columns: ["taskId","pointsId","creator","record","image","isException"],
  condition: ["pointsId","creator"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='gx208wmv' label='添加记录' mode='dialog' fields={["pointsId","record","image"]} type='primary' url='/do/put/task_detail' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='3eju3rim' label='删除' link data={row} url='/do/delete/task_detail' />
        </>
      )
    }
  }
}
  