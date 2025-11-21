export default {
  url: "/do/select/attribute",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/attribute',
  title: "属性配置",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"属性名称"},{"name":"type","label":"输入类型","code":"attrType"},{"name":"required","label":"是否必填","type":"switch"},{"name":"sort","label":"展示顺序","type":"number"},{"name":"status","label":"是否启用","type":"switch"},{"name":"applyType","label":"所属类型"},{"name":"options","label":"输入选项","type":"inputTag"},{"name":"communityId","label":"社区id","type":"search","depend":"community"}],
  columns: ["title","type","applyType","required","status"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='s8w6hy2n' label='新增属性' mode='dialog' fields={["title","type","required","sort","options","status"]} url='/do/put/attribute' title='新增属性' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='96e1xu7w' label='编辑' mode='dialog' fields={["title","type","required","sort","status","options"]} link data={row} url='/do/patch/attribute' />
<z-action p='lsfbmx1z' label={row.status === 0?'删除':null} mode='confirm' link data={row} url='/do/delete/attribute' />
        </>
      )
    }
  }
}
  