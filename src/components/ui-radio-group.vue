<template>
    <div>
        <ui-radio
            v-for="item in items"
            :id="`${id}_${item.value}`"
            :key="item.label"
            :value="item.value"
            :name="name"
            :checked="item.value === selected"
            :disabled="disabled"
            @change="$emit('change', $event.target.value)"
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
    props: {
        items: {
            type: Array,
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
            type: [String, Boolean, Number],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
