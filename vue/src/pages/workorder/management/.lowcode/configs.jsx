export default {
  url: "/do/select/workorder",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'workorder/management',
  title: "工单管理",
	tabs: {"code":"workorderStatus","list":[{"label":"待处理","value":"0","id":"jyevqmtjebm"},{"label":"处理中","value":"1","id":"nwhf8tu1631"},{"label":"已完成","value":"2","id":"e90i90o0k7w"},{"label":"已取消","value":"3","id":"tfple2j5vfv"}],"keyword":"status"},
  entitys: [{"name":"id","label":"工单ID","type":"search"},{"name":"uid","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"type","label":"工单类型","code":"workorderType"},{"name":"status","label":"工单状态","code":"workorderStatus"},{"name":"priority","label":"是否加急","type":"switch"},{"name":"describe","label":"工单描述","type":"textarea"},{"name":"communityId","label":"小区id","type":"search","depend":"community"},{"name":"images","label":"图片","type":"inputTag"},{"name":"phone","label":"联系人电话"},{"name":"voice","label":"语音"},{"name":"recipientId","label":"受理人","type":"search","depend":"community_manager"},{"name":"file","label":"附件","type":"inputTag"},{"name":"licensePlate","label":"车牌号"},{"name":"houseId","label":"房屋","type":"search","depend":"house"}],
  columns: ["id","type","priority","phone","createGmt","status"],
  condition: ["type"],
  slots: {
      header$() {
      return (
        <>
        <z-action p='s8r74ezk5lv' label='新建工单' mode='dialog' fields={["type",{"name":"houseId","visible":(formData) => formData.type < 2 && formData.type >= 0},{"name":"licensePlate","visible":(formData) => formData.type > 1},"phone","images","describe","priority"]} rules={{"type":{"message":"请输入正确内容","required":true}}} type='primary' url='/do/put/workorder' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='s58t3cv386a' label={row.status == 1 || status == 2?'工单日志':null} data={row} mode='drawer' href='/workorder/details' fixed='detail' width='680px' link map={{"workorderId":"id"}} url='/do/select/workorder_detail' />
<z-action p='9g5thq5g91h' label='编辑' mode='dialog' fields={["type","describe","priority","phone","images"]} link data={row} url='/do/patch/workorder' />
<z-action p='2pu4myx9vd7' label={row.status == 0?'受理':null} fields={["recipientId"]} link data={row} url='/do/patch/workorder_handle' />
<z-action p='ks9v5o1lw98' label={row.status == 0||status == 1?'取消':null} link data={row} url='/do/patch/workorder_cancel' />
<z-action p='wbyzcv2zu05' label='删除' mode='confirm' link data={row} url='/do/delete/workorder' />
        </>
      )
    }
  }
}
  