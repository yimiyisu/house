export default {
  url: "/do/select/pet_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/petLog',
  title: "宠物记录表",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"疫苗名称"},{"name":"inoculationTime","label":"接种时间","type":"date"},{"name":"nextTime","label":"下次接种时间","type":"date"},{"name":"prove","label":"接种证明图","type":"image"},{"name":"petId","label":"宠物信息","type":"search","depend":"pet"}],
  columns: ["title","inoculationTime","nextTime","prove"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action label='添加记录' mode='dialog' fields={["title","inoculationTime","nextTime","prove"]} type='primary' url='/do/put/pet_log' title='添加记录' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action label='修改' mode='dialog' fields={["title","inoculationTime","nextTime","prove"]} link data={row} url='/do/patch/pet_log' includeTitle='l' />
<z-action label='删除' mode='confirm' link data={row} url='/do/delete/pet_log' />
        </>
      )
    }
  }
}
  