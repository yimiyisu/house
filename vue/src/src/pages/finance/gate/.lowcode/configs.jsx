export default {
  url: "/do/select/gate",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/gate',
  title: "道闸管理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"status","label":"状态","code":"gateStatus"},{"name":"desc","label":"描述"},{"name":"ipAddress","label":"设备ip地址"},{"name":"config","label":"配置","type":"map"},{"name":"title","label":"设备编号"},{"name":"communityId","label":"小区","type":"search","depend":"community"}],
  columns: ["title","status","ipAddress","desc"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='ovw2hwgfya5' label='添加' mode='dialog' fields={["title","ipAddress","desc"]} url='/do/put/gate' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='qmr2c9m28ho' label='车辆记录' data={row} mode='drawer' href='/finance/carLog' link map={{"outId":"id"}} />
<z-action p='5mz3yliv9e1' label='编辑' mode='dialog' fields={["title","status","ipAddress","desc"]} link data={row} url='/do/patch/gate' />
<z-action p='nykpvvhy5qx' label='删除' mode='confirm' link data={row} url='/do/delete/gate' />
        </>
      )
    }
  }
}
  