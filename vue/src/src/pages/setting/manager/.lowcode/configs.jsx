export default {
  url: "/do/select/community_manager",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'setting/manager',
  title: "小区经理",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"communityId","label":"社区","type":"search","depend":"community"},{"name":"uid","label":"用户","type":"user"},{"name":"title","label":"姓名"},{"name":"telephone","label":"电话"},{"name":"status","label":"状态","code":"managerStatus"},{"name":"idCard","label":"身份证号"},{"name":"sex","label":"性别","type":"switch"},{"name":"avatar","label":"头像","type":"image"}],
  columns: ["id","uid","title","telephone","communityId","updateGmt","status"],
  condition: ["uid"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='ihsdqao4' label='新增人员' mode='dialog' fields={["title","telephone"]} type='primary' url='/do/put/community_manager' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='no0a55lu' label={row.uid == null?'生成绑定码':null} width='500px' fields={[{"name":"id","slot":"securityOnBoard"}]} link data={row} />
<z-action p='x3rg0zt5' label='编辑' mode='dialog' fields={["avatar","title","sex","telephone","idCard"]} cb='patchCms' link data={row} url='/do/patch/community_manager' />
<z-action p='fq3tx105' label={row.status == 0 || row.status == null?'启用':null} mode='confirm' cb='enableCms' link data={row} url='/do/patch/community_manager_enable' />
<z-action p='m9bup0ut' label={row.status ==1?'禁用':null} mode='confirm' cb='disableCms' link data={row} url='/do/patch/community_manager_disable' />
<z-action p='15q2yvi6' label='删除' mode='confirm' cb='delCms' link data={row} url='/do/delete/community_manager' />
<z-action p='i3ncr2m2' label={row.uid == null?'直接绑定':null} mode='dialog' fields={["uid"]} link data={row} url='/do/patch/community_manager_bind' />
        </>
      )
    }
  }
}
  