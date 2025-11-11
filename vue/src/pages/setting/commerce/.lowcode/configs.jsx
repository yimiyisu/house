export default {
  url: "/do/select/house",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/commerce',
  title: "店铺管理",
	tabs: {"code":"commerceType","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"房屋编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"areaTitle","label":"所属位置"},{"name":"structure","label":"户型结构","code":"houseStructure"},{"name":"type","label":"房屋类型","code":"cfg_houseType"},{"name":"areaId","label":"住宅区","type":"search","depend":"house_area"},{"name":"title","label":"名称"},{"name":"status","label":"状态","code":"commerceType"},{"name":"water","label":"水表"},{"name":"electricity","label":"电表"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"isCommerce","label":"是否是商业区","type":"switch"}],
  columns: ["title","areaTitle","status"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='rqbkgzilw5w' label='添加店铺' mode='dialog' fields={["title"]} type='primary' url='/do/put/house_commerce' title='添加店铺' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='6b4ej5kwnm0' label='编辑' mode='dialog' fields={["title","areaTitle","status"]} link data={row} url='/do/patch/house' />
<z-action p='5oj7rgyvrye' label='明细' data={row} mode='drawer' href='/daily/commerceDetail' link map={{"houseId":"id"}} />
<z-action p='1dwqph6bay9' label={row.status != 1?'删除':null} mode='confirm' link data={row} url='/do/delete/house' />
        </>
      )
    }
  }
}
  