export default {
  url: "/do/select/car_admin",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'landlord/parkingApply',
  title: "车辆车位管理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"createGmt","label":"登记时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"model","label":"品牌型号"},{"name":"title","label":"车牌号"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"parkingId","label":"车位","type":"search","depend":"parking"},{"name":"fee","label":"收费标准","type":"search","depend":"fee_plain"},{"name":"status","label":"登记状态","code":"carStatus"},{"name":"endTime","label":"到期时间","type":"date"}],
  columns: ["title","houseId","createGmt","parkingId","fee","endTime","status"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='a9iah7yn' label='车辆登记' mode='dialog' fields={["title","model","houseId","parkingId","fee"]} url='/do/put/car_admin' title='车辆登记' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='hml4t6i7' label='编辑' mode='dialog' fields={["parkingId","fee"]} link data={row} url='/do/patch/car_config' />
<z-action p='ynb3o1w3' label='缴费管理' data={row} mode='drawer' href='/daily/carPayment' link map={{"carId":"id"}} />
        </>
      )
    }
  }
}
  