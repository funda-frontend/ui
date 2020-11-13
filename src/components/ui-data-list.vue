<template>
    <dl 
        class="fd-data-list"
        :class="{ 'fd-data-list--card': card }"
    >
        <template v-for="(item, i) in data">
            <div :key="i">
                <dt class="fd-data-list__dt">
                    {{ Object.keys(item)[0] }}
                </dt>
                <dd class="fd-data-list__dd">
                    {{ item[Object.keys(item)[0]] }} 
                </dd>
            </div>
        </template>
    </dl>
</template>

<script>
export default {
    props: {
        card: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Array,
            required: true,
        },
    }
}
</script>