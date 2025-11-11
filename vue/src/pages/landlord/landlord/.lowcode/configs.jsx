export default {
  url: "/do/select/landlord",
  conditionLimit:null,
  selectable: true,
  showIndex: true,
  compact: 220,
  path: 'landlord/landlord',
  title: "业主列表",
	tabs: {"list":[{"label":"启用","value":"1","id":"s2hvzud68z7"},{"label":"禁用","value":"0","id":"vckwmaggw5p"}],"keyword":"isEnabled"},
  entitys: [{"name":"id","label":"用户","type":"user"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"小区","type":"search","depend":"community"},{"name":"telephone","label":"手机号"},{"name":"title","label":"姓名"},{"name":"isEnabled","label":"是否启用","type":"switch"},{"name":"idcard","label":"身份证"}],
  columns: ["id","title","telephone","idcard","isEnabled"],
  condition: ["title","telephone"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='l0lxrk5d4w0' label='添加' mode='dialog' fields={["id","title","telephone","idcard"]} type='primary' url='/do/put/landlord' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='a6fav7ma2e2' label='编辑' mode='dialog' fields={["title","telephone","idcard","isEnabled"]} link data={row} url='/do/patch/landlord' />
<z-action p='dm4ar22rvtd' label='删除' mode='confirm' link data={row} url='/do/delete/landlord' />
        </>
      )
    }
  }
}
  