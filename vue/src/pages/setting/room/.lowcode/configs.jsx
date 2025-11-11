export default {
  url: "/do/select/house",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/room',
  title: "房屋列表",
	tabs: {"code":"cfg_houseType","list":[],"keyword":"type"},
  entitys: [{"name":"id","label":"房屋编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"areaTitle","label":"所属位置"},{"name":"structure","label":"户型结构","code":"houseStructure"},{"name":"type","label":"房屋类型","code":"cfg_houseType"},{"name":"areaId","label":"住宅区","type":"search","depend":"house_area"},{"name":"title","label":"名称"},{"name":"status","label":"状态","code":"commerceType"},{"name":"water","label":"水表"},{"name":"electricity","label":"电表"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"isCommerce","label":"是否是商业区","type":"switch"}],
  columns: ["title","areaTitle","structure","type"],
  condition: ["structure"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='tcvfjz7fbgb' label='添加房屋' mode='dialog' fields={["title","structure",{"name":"type","slot":"houseType"}]} type='primary' url='/do/put/house_house' title='添加房屋' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='xb1lqr08qgx' label='明细' data={row} mode='drawer' href='/daily/houseDetail' link map={{"houseId":"id"}} />
<z-action p='07jk6yxjwlc' label='编辑' mode='dialog' fields={["title","structure",{"name":"type","slot":"houseType"},"communityId"]} link data={row} url='/do/patch/house' />
<z-action p='trxr089kywa' label='删除' mode='confirm' link data={row} url='/do/delete/house' />
        </>
      )
    }
  }
}
  