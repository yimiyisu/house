<template>
    <z-table name="amrkmuiklmj" mocked @addCms="addCms" :beforeSet="beforeSet">
    </z-table>
</template>

<script>
import configs from './.lowcode/configs';


export default {
    name: 'p-amrkmuiklmj',
    provide: { configs },
    data() {
        return {
        }
    },
    methods: {
        beforeSet(formData) {
            const { address } = formData
            if (!address || address.length !== 3) {
                $.error('小区地址错误')
                return false
            }
            formData.lastId = address[2].value;
            return formData
        },
        async addCms(result, formData) {
            await $.post({ url: '/cms/do/put/site_byMall', data: { id: result.id, title: formData.title } })
        },
    }
}
</script>
