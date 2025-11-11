export default {
  url: "/do/select/bills",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/fee',
  title: "账单详情",
	tabs: {"code":"costStatus","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"houseId","label":"房间","type":"search","depend":"house"},{"name":"type","label":"类型","code":"billType"},{"name":"status","label":"状态","code":"costStatus"},{"name":"cost","label":"金额","type":"money"},{"name":"paylogId","label":"详情","type":"search","depend":"pay_log"},{"name":"communityId","label":"小区","type":"search","depend":"community"}],
  columns: ["cost","type","status","createGmt"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='lcslmmdi' label='添加记录' mode='dialog' fields={["houseId","type","status","cost"]} type='primary' url='/do/put/bills' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='hglpamue' label='删除' mode='confirm' link data={row} url='/do/delete/bills' />
        </>
      )
    }
  }
}
  