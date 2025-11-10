export default {
  url: "/do/select/workorder",
  conditionLimit:null,
  selectable: false,
  showIndex: false,
  compact: 220,
  path: 'daily/repair',
  title: "报修记录",
  entitys: [{"name":"id","label":"编号","type":"search"},{"name":"uid","label":"创建人","type":"user"},{"name":"createGmt","label":"创建时间","type":"date"},{"name":"updateGmt","label":"更新时间","type":"date"},{"name":"type","label":"工单类型","code":"workorderType"},{"name":"status","label":"工单状态","code":"workorderStatus"},{"name":"priority","label":"是否加急","type":"switch"},{"name":"describe","label":"工单描述","type":"textarea"},{"name":"communityId","label":"小区id","type":"search","depend":"community"},{"name":"images","label":"图片","type":"inputTag"},{"name":"phone","label":"联系人电话"},{"name":"voice","label":"语音"},{"name":"recipientId","label":"受理人","type":"search","depend":"community_manager"},{"name":"file","label":"附件","type":"inputTag"},{"name":"licensePlate","label":"车牌号"}],
  columns: ["status","priority","describe"],
  condition: [],
  slots: {
      header$() {
      return (
        <>
        <z-action p='81axjacn2yk' label='报修' mode='dialog' fields={["priority","describe"]} type='primary' url='/do/put/workorder' />
        </>
      )
    },
    action$({ row }) {
      return (
        <>
          <z-action p='fx7lw6za4y9' label={row.status != 0?'受理详情':null} data={row} mode='drawer' href='/workorder/details' link map={{"workorderId":"id"}} />
<z-action p='nvtwamrabhw' label={row.status == 0?'编辑':null} mode='dialog' fields={["describe","priority"]} link data={row} url='/do/patch/workorder' />
<z-action p='aab7u0kq8t6' label={row.status == 0?'取消':null} mode='confirm' link data={row} url='api/workorder/close' />
        </>
      )
    }
  }
}
  