export default {
  url: "/do/list/task_user",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 220,
  path: 'patrol/taskUser',
  title: "巡检人员",
  entitys: [{"name":"creator","label":"巡检人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"taskId","label":"巡检任务","type":"search","depend":"patrol_task"},{"name":"id","label":"编号","type":"search"}],
  columns: ["creator","createGmt","updateGmt","taskId"],
  condition: ["creator"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='t4szx6st' label='添加人员' mode='dialog' fields={["creator"]} type='primary' url='/do/put/task_user' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='re8shs0l' label='删除' mode='confirm' link data={row} url='/do/delete/task_user' />
        </>
      )
    }
  }
}
  