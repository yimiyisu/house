export default {
  url: "/do/list/rent",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 130,
  path: 'daily/rent',
  title: "商业租赁",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"commerceId","label":"商铺","type":"search","depend":"house"},{"name":"startDate","label":"租赁开始日期","type":"date"},{"name":"endDate","label":"租赁结束日期","type":"date"},{"name":"status","label":"租赁状态","code":"rentType"},{"name":"amount","label":"租金金额","type":"money"},{"name":"notes","label":"备注"},{"name":"contractId","label":"租赁合同","type":"search"},{"name":"communityId","label":"小区id","type":"search","depend":"community"}],
  columns: ["startDate","endDate","status","amount","notes"],
  condition: ["status"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='399x8kzgrzx' label='添加租赁信息' mode='dialog' fields={["startDate","endDate","status","amount","notes"]} type='primary' url='/do/put/rent' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='oa63sk7uxk8' label='编辑' mode='dialog' fields={["startDate","endDate","status","amount","notes"]} link data={row} url='/do/patch/rent' />
<z-action p='glayyjaf86l' label='删除' mode='confirm' link data={row} url='/do/delete/rent' />
        </>
      )
    }
  }
}
  