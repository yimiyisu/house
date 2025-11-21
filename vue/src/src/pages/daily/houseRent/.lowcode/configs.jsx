export default {
  url: "/do/select/house_rent",
  conditionLimit:null,
  selectable: false,
  showIndex: true,
  compact: 110,
  path: 'daily/houseRent',
  title: "出租记录",
	tabs: {"code":"rentType","list":[],"keyword":"status"},
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"startDate","label":"租赁开始时间","type":"date"},{"name":"title","label":"租户"},{"name":"houseId","label":"房产","type":"search","depend":"house"},{"name":"endDate","label":"租赁结束时间","type":"date"},{"name":"idcard","label":"身份证"},{"name":"status","label":"租赁状态","code":"rentType"},{"name":"note","label":"备注"},{"name":"telephone","label":"电话"}],
  columns: ["houseId","title","idcard","telephone","startDate","endDate","status","note"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='d7vr7dmqkyg' label='添加' mode='dialog' fields={["title","idcard","telephone","startDate","endDate","note"]} rules={{"title":{"message":"请输入正确内容","required":true},"idcard":{"message":"请输入正确内容","required":true}}} type='primary' url='/do/put/house_rent' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='5zu0obuwvgg' label='编辑' mode='dialog' fields={["title","idcard","telephone","startDate","endDate","status","note"]} link data={row} url='/do/patch/house_rent' />
<z-action p='pxe4x37nm5w' label='删除' mode='confirm' link data={row} url='/do/delete/house_rent' />
        </>
      )
    }
  }
}
  