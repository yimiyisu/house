export default {
  url: "/do/select/announcement",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 220,
  path: 'announcement/announcement',
  title: "小区公示",
	tabs: {"code":"announcementType","list":[],"keyword":"type"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"creator","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"公示标题"},{"name":"content","label":"公示内容","type":"textarea"},{"name":"type","label":"公示类型","code":"announcementType"},{"name":"communityId","label":"所属小区","type":"search","depend":"community"},{"name":"image","label":"图片","type":"image"}],
  columns: ["title","image","type","updateGmt"],
  condition: ["title"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='eozs2xerb9o' label='添加' mode='drawer' href='/announcement/announcementDetails' type='primary' url='/do/put/announcement' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='axjvgbrm1bw' label='编辑' data={row} mode='drawer' href='/announcement/announcementDetails' fixed='announcementId' link map={{"announcementId":"id"}} url='/announcement/announcementDetails' />
<z-action p='3jzhs6f8syz' label='删除' mode='confirm' link data={row} url='/do/delete/announcement' />
        </>
      )
    }
  }
}
  