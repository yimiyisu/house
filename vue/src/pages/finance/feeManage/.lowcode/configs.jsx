export default {
  url: "/do/select/fee_plain",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/feeManage',
  title: "费用管理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"标题"},{"name":"starttime","label":"生效日期","type":"date"},{"name":"type","label":"费用类型","code":"billType"},{"name":"configs","label":"费率详情","type":"inputTag"},{"name":"status","label":"是否启用","type":"switch"},{"name":"constant","label":"默认费用","type":"money"},{"name":"communityId","label":"小区id","type":"search","depend":"community"}],
  columns: ["title","creator","createGmt","starttime","type","status"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='mgaij6o8' label='新增费用' mode='dialog' fields={["title","type","starttime",{"name":"configs","slot":"feeConfig"},"status"]} url='/do/put/fee_plain' title='新增费用' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='s1tysgt3' label='编辑' mode='dialog' fields={["starttime",{"name":"configs","slot":"feeConfig"}]} link data={row} url='/do/patch/fee_plain' />
<z-action p='brucbsv8' label={row.status == 1?'停用':null} mode='confirm' link data={row} url='/do/patch/fee_plain_disabled' />
<z-action p='k8y12bir' label={row.status == 0?'启用':null} mode='confirm' link data={row} url='/do/patch/fee_plain_enable' />
<z-action p='gxyusnvl' label={row.status == 0?'删除':null} mode='confirm' link data={row} url='/do/delete/fee_plain' />
        </>
      )
    }
  }
}
  