export default {
  url: "/do/select/car_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/carLog',
  title: "车辆通行记录表",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"carId","label":"车辆","type":"search","depend":"car"},{"name":"cash","label":"缴费金额","type":"money"},{"name":"parkingId","label":"车位","type":"search","depend":"parking"},{"name":"payTime","label":"缴费时间","type":"date"},{"name":"status","label":"缴费状态","code":"payStatus"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"outId","label":"外部id"},{"name":"month","label":"租赁时长","type":"number"},{"name":"validTime","label":"有效时间","type":"date"}],
  columns: ["carId","status","cash","parkingId","payTime","month","validTime","updateGmt"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='9bl8gb9h' label='添加' mode='dialog' fields={["carId","cash","parkingId","month","validTime"]} url='/do/put/car_log' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='8idlslav' label={row.payId != null?'账单明细':null} data={row} mode='drawer' href='/finance/pay' link map={{"id":"payId"}} />
<z-action p='hkatvyjy' label='编辑' mode='dialog' fields={["carId","cash","parkingId","status","payTime","month","validTime"]} link data={row} url='/do/patch/car_log' />
<z-action p='s8gqmqgl' label='删除' mode='confirm' link data={row} url='/do/delete/car_log' />
        </>
      )
    }
  }
}
  