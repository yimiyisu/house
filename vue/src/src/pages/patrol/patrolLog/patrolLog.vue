<template>
    <z-table name="mvfidxcg">
        <template #image="{ row }">
            <div v-if="row.image">
                <div v-for="(image, index) in row.image" :key="index">
                    <z-image v-model="image.url" readonly />
                </div>
            </div>
        </template>
    </z-table>
</template>

<script>
import configs from './.lowcode/configs';
$.extend(configs, { image: { type: 'image', multiple: 'true' } })

export default {
    name: 'p-mvfidxcg',
    provide: { configs },
    data() {
        return {}
    },
}
</script>
