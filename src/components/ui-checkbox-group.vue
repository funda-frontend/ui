<template>
    <div>
        <ui-checkbox
            v-for="item in items"
            :id="`${id}_${item.value}`"
            :key="item.label"
            :value="item.value"
            :name="name"
            :checked="item.selected"
            :disabled="disabled"
            @change="$emit('change', $event.target.value)"
        >
            {{ item.label }}
        </ui-checkbox>
    </div>
</template>
<script>
import UiCheckbox from './ui-checkbox.vue';

export default {
    components: {
        UiCheckbox,
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
            default: 'funda_checkbox_input',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
