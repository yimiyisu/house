<template>
    <z-table name="6ureor5neko" mocked>
        <template #houseType>
            <z-form-items :fields="fields" />
        </template>
    </z-table>
</template>

<script>
import configs from './.lowcode/configs';

export default {
    name: 'p-6ureor5neko',
    provide: { configs },
    data() {
        return {
            fields: [
                { name: 'type', type: 'select', label: '房屋类型', code: 'cfg_houseType' }
            ]
        }
    },
}
</script>
