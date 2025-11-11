export default {
  url: "/do/select/car_log",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/carPayment',
  title: "缴费记录",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"carId","label":"车辆","type":"search","depend":"car"},{"name":"cash","label":"缴费金额","type":"money"},{"name":"parkingId","label":"车位","type":"search","depend":"parking"},{"name":"payTime","label":"缴费时间","type":"date"},{"name":"status","label":"缴费状态","code":"payStatus"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"outId","label":"外部id"},{"name":"month","label":"租赁时长","type":"number"},{"name":"validTime","label":"有效时间","type":"date"}],
  columns: ["creator","createGmt","carId","parkingId","cash","validTime","status","payTime"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='114qzyie' label='新增缴费' mode='dialog' fields={[{"name":"month","slot":"addCarLog"}]} url='/api/fee/addParkingFee' title='新增缴费' />
        </>
      )
    },
    
  }
}
  