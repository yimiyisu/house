export default {
  url: "",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'visitor/registration',
  title: "门岗登记",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"来访时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"realname","label":"访客姓名"},{"name":"telephone","label":"联系电话"},{"name":"reason","label":"来访目的","type":"textarea"},{"name":"type","label":"来访类型","type":"switch"}],
  columns: ["id","realname","telephone","reason","createGmt"],
  condition: ["realname"],
  slots: {
      header$() {
      return (
        <>
        <z-action label='搜索' mode='drawer' href='null' type='primary' map={{}} />
        </>
      )
    },
    
  }
}
  