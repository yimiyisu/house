export default {
  url: "/do/select/parking",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/parking',
  title: "车位管理",
	tabs: {"code":"cfg_parkingType","list":[],"keyword":"type"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"status","label":"车位状态","code":"parkingStatus"},{"name":"areaId","label":"所属区域","type":"search","depend":"parking_area"},{"name":"title","label":"车位编号"},{"name":"type","label":"车位类型","code":"cfg_parkingType"},{"name":"areaTitle","label":"所属位置"},{"name":"communityId","label":"社区id","type":"search","depend":"community"}],
  columns: ["title","areaTitle","type","status"],
  condition: ["status"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='0xttfn9866n' label='添加车位' mode='dialog' fields={["title",{"name":"type","slot":"parkingType"},"status"]} type='primary' url='/do/put/parking' title='添加车位' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='rov2tt3iq2g' label={row.status == 2?'详情':null} data={row} mode='drawer' href='/setting/car' link map={{"parkingId":"id"}} />
<z-action p='3vdlyhe612p' label='编辑' mode='dialog' fields={["title","type","status","areaTitle"]} link data={row} url='/do/patch/parking' />
<z-action p='rpkhw8sfei0' label={row.status != 2?'删除':null} mode='confirm' link data={row} url='/do/delete/parking' />
        </>
      )
    }
  }
}
  