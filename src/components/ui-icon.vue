<template>
    <!-- eslint-disable vue/no-v-html -->
    <div :class="['fill-current align-middle', size]" v-html="thisIcon"></div>
</template>

<script>
import * as icons from '@funda/icons';

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: 'h-6 w-6',
        },
    },
    computed: {
        thisIcon() {
            return icons[this.icon] ? icons[this.icon].svg : '';
        },
    },
};
</script>
