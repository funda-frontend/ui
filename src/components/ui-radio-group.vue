<template>
    <div>
        <ui-radio
            v-for="item in items"
            :id="`${id}_${item.value}`"
            :key="item.label"
            :name="name"
            :checked="item.value === selected"
            :disabled="disabled"
        >
            {{ item.label }}
        </ui-radio>
    </div>
</template>
<script>
import UiRadio from './ui-radio.vue';

export default {
    components: {
        UiRadio,
    },
    inheritAttrs: false,
    props: {
        items: {
            type: [Array, String],
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: 'funda_radio_input',
        },
        selected: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
        },
    },
};
</script>
