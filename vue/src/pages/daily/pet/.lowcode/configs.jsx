export default {
  url: "/do/select/pet",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/pet',
  title: "宠物登记",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"houseId","label":"房屋","type":"search","depend":"house"},{"name":"createGmt","label":"登记日期","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"title","label":"宠物名"},{"name":"species","label":"种类","code":"petType"},{"name":"note","label":"备注","type":"textarea"}],
  columns: ["title","species","note"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='m49mvyjdlaf' label='添加宠物' mode='dialog' fields={["title","species","note"]} type='primary' url='/do/put/pet' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='dzx0oluiexv' label='防疫记录' data={row} mode='drawer' href='/daily/petLog' fixed='petLog' link map={{"petId":"id"}} includeTitle='l' />
<z-action p='f2gp43uzms2' label='编辑' mode='dialog' fields={["title","species","note"]} link data={row} url='/do/patch/pet' includeTitle='l' />
<z-action p='1z2eyrph0lh' label='删除' mode='confirm' link data={row} url='/do/delete/pet' />
        </>
      )
    }
  }
}
  