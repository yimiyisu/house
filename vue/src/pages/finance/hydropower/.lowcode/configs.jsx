export default {
  url: "/do/select/meter_readings",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'finance/hydropower',
  title: "水电抄表",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"所属小区","type":"search","depend":"community"},{"name":"reading","label":"当前度数","type":"number"},{"name":"type","label":"类型","code":"meterType"},{"name":"cost","label":"金额","type":"money"},{"name":"equipment","label":"设备编号"},{"name":"houseId","label":"房屋","type":"search","depend":"house"}],
  columns: ["type","reading","cost","equipment"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='8oswvm557ye' label='添加' mode='dialog' fields={["reading","type","cost","equipment"]} type='primary' url='/do/put/meter_readings' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='9u6eh6z4aqv' label='编辑' mode='dialog' fields={["reading","type","cost"]} link data={row} url='/do/patch/meter_readings' />
<z-action p='0mekfv8w1pq' label='删除' mode='confirm' link data={row} url='/do/delete/meter_readings' />
        </>
      )
    }
  }
}
  