export default {
  url: "/do/select/patrol_task",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 260,
  path: 'patrol/task',
  title: "巡检任务",
	tabs: {"list":[{"label":"未完成","value":"0","id":"6kn3j5hksru"},{"label":"已完成","value":"1","id":"g0bgebhkr5w"}],"keyword":"isFinish"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"routeId","label":"路线","type":"search","depend":"patrol_route"},{"name":"title","label":"任务名称"},{"name":"isFinish","label":"是否完成","type":"switch"},{"name":"inspectionCycle","label":"巡检周期","code":"taskType"},{"name":"isException","label":"是否异常","type":"switch"},{"name":"communityId","label":"小区id","type":"search","depend":"community"}],
  columns: ["title","routeId","inspectionCycle","isFinish","isException"],
  condition: ["routeId"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='z1igloqp916' label='添加' mode='dialog' fields={["routeId","title","inspectionCycle"]} type='primary' url='/api/patrol/putTask' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='yi78xvqpctl' label='任务详情' data={row} mode='drawer' href='/patrol/detail' fixed='detail' link map={{"taskId":"id"}} />
<z-action p='emkll0xfqhk' label='巡检人员' data={row} mode='drawer' href='/patrol/taskUser' link map={{"taskId":"id"}} url='/do/patch/patrol_task' />
<z-action p='tabt3ob0pyr' label='编辑' mode='dialog' fields={["title","routeId","isFinish","inspectionCycle","isException"]} link data={row} url='/do/patch/patrol_task' />
<z-action p='q98k0si252y' label='删除' mode='confirm' link data={row} url='/do/delete/patrol_task' />
        </>
      )
    }
  }
}
  