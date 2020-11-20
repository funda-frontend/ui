<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="fill-current h-6 w-6 align-middle" v-html="thisIcon"></div>
</template>

<script>
import * as icons from '@funda/icons';

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    computed: {
        thisIcon() {
            return icons[this.icon].svg || '';
        },
    },
};
</script>
