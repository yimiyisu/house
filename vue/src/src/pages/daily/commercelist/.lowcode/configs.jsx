export default {
  url: "/do/select/house",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 90,
  path: 'daily/commercelist',
  title: "店铺列表",
	tabs: {"code":"commerceType","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"房屋编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"areaTitle","label":"所属位置"},{"name":"structure","label":"户型结构","code":"houseType"},{"name":"type","label":"房屋类型","code":"roomType"},{"name":"areaId","label":"住宅区","type":"search","depend":"house_area"},{"name":"title","label":"名称"},{"name":"status","label":"状态","code":"commerceType"},{"name":"water","label":"水表"},{"name":"electricity","label":"电表"}],
  columns: ["title","areaTitle","status"],
  condition: ["title"],
  slots: {
    action$({ row }) {
      return (
        <>
          <z-action label='明细' data={row} mode='drawer' href='/daily/commerceDetail' fixed='detail' link map={{"houseId":"id"}} includeTitle='l' />
        </>
      )
    }
  }
}
  