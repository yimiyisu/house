export default {
  url: "/do/select/rent",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'finance/rent',
  title: "商业租赁",
	tabs: {"code":"rentStatus","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"commerceId","label":"商铺","type":"search","depend":"house"},{"name":"startDate","label":"租赁开始日期","type":"date"},{"name":"endDate","label":"租赁结束日期","type":"date"},{"name":"status","label":"租赁状态","code":"rentStatus"},{"name":"amount","label":"租金金额","type":"money"},{"name":"notes","label":"备注"},{"name":"contractId","label":"租赁合同","type":"search"},{"name":"communityId","label":"小区id","type":"search","depend":"community"}],
  columns: ["commerceId","startDate","endDate","status","amount","notes","contractId"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='xqbvob9t43m' label='添加租赁信息' mode='dialog' fields={["commerceId","startDate","endDate","status","amount","notes"]} type='primary' url='/do/put/rent' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='34qz0xrf9mg' label='编辑' mode='dialog' fields={["commerceId","startDate","endDate","status","amount","notes","contractId"]} link data={row} url='/do/patch/rent' />
<z-action p='q8va25ugufe' label='删除' mode='confirm' link data={row} url='/do/delete/rent' />
        </>
      )
    }
  }
}
  