export default {
  url: "/do/select/equipment",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 220,
  path: 'equipment/equipment',
  title: "设备管理",
	tabs: {"list":[{"label":"启用","value":"1","id":"i1must8tfb2"},{"label":"禁用","value":"0","id":"0gwz2qfriia"}],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"number","label":"设备编号"},{"name":"title","label":"设备名称"},{"name":"areaId","label":"设备位置","type":"search","depend":"equipment_area"},{"name":"status","label":"是否启用","type":"switch"},{"name":"type","label":"设备类型","code":"equipmentType"},{"name":"notes","label":"其他备注信息","type":"textarea"},{"name":"brand","label":"品牌"},{"name":"config","label":"设备配置","type":"inputTag"},{"name":"houseId","label":"房子编号","type":"search","depend":"house"}],
  columns: ["number","title","areaId","status","type","brand"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='bhrecb168z7' label='添加设备' mode='dialog' fields={["number","title","status","type","brand"]} type='primary' url='/do/put/equipment' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='02q07n7ryqw' label='编辑' mode='dialog' fields={["number","title","status","brand","config"]} link data={row} url='/do/patch/equipment' />
<z-action p='cmv40tceuxv' label='删除' mode='confirm' link data={row} url='/do/delete/equipment' />
        </>
      )
    }
  }
}
  