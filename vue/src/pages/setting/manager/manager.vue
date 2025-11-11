<template>
  <z-table name="hptmdbowtul" mocked @addCms="addCms" @delCms="delCms" @patchCms="patchCms" @enableCms="enableCms" @disableCms="disableCms">
    <template #securityOnBoard="formData">
            <SecurityOnBoard :data="formData" />
        </template>
  </z-table>
</template>

<script>
import configs from './.lowcode/configs'
import SecurityOnBoard from './blocks/securityOnBoard.vue';

export default {
  name: 'p-hptmdbowtul',
  components: { SecurityOnBoard },
  provide: { configs },
  data() {
    return {}
  },
  methods: {
      async addCms(result,formData) {
        await $.post({url: '/cms/do/put/manager', data: { id:result.id,site: formData.communityId, uid:formData.uid,title: formData.title, telephone: formData.telephone,status:1,idCard:formData.idCard,sex:formData.sex,avator:formData.avator }})
      },
      async delCms(formData) {
        await $.post({url: '/cms/do/delete/manager', data: { id:formData.id }})
      },
      async patchCms(result,formData) {
        await $.post({url: '/cms/do/patch/manager', data: { id:formData.id,title: formData.title, telephone: formData.telephone,idCard:formData.idCard,sex:formData.sex,avator:formData.avator }})
      },
      async enableCms(formData) {
        await $.post({url: '/cms/do/patch/manager_enable', data: { id:formData.id }})
      },
      async disableCms(formData) {
        await $.post({url: '/cms/do/patch/manager_disable', data: { id:formData.id }})
      }
    }
}
</script>
    