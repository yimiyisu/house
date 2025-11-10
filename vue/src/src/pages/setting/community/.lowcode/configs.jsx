export default {
  url: "/do/select/community",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 200,
  path: 'setting/community',
  title: "小区管理",
  entitys: [{"name":"id","label":"小区编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"address","label":"地址","type":"address"},{"name":"title","label":"社区名称"},{"name":"phone","label":"客服电话"},{"name":"description","label":" 小区描述","type":"textarea"},{"name":"area","label":"详细地址","type":"textarea"},{"name":"lastId","label":"最后一级地址id"}],
  columns: ["title","phone","address","area","description"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='54ie2felaqh' label='添加小区' mode='dialog' fields={["title","phone","address","area","description"]} br='beforeSet' cb='addCms' type='primary' url='/do/put/community' title='添加小区' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='brk0t1h5gnn' label='物业人员' data={row} mode='drawer' href='/setting/manager' link map={{"communityId":"id"}} />
<z-action p='18ko5k9xt28' label='编辑' mode='dialog' fields={["title","phone","address","description","area"]} br='beforeSet' link data={row} url='/do/patch/community' />
<z-action p='vheb27um2w6' label='删除' mode='confirm' link data={row} url='/do/delete/community' />
        </>
      )
    }
  }
}
  