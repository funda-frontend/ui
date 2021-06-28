<template>
    <div :class="cssClasses" class="items-center flex p-3">
        <span class="mr-3" :aria-label="type">
            <icon-error v-if="type === 'error'" class="text-red-1" />
            <icon-info v-if="type === 'information'" class="text-dark-1" />
            <icon-success v-if="type === 'success'" class="text-green-1" />
            <icon-warning v-if="type === 'warning'" class="text-yellow-1" />
        </span>

        <slot name="notificationBody" />
    </div>
</template>

<script>
import {
    Error as IconError,
    Information as IconInfo,
    Success as IconSuccess,
    Warning as IconWarning,
} from '@funda/icons/lib/vue';

export default {
    components: { IconError, IconInfo, IconSuccess, IconWarning },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
        rounded: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        cssClasses() {
            const type = {
                information: 'bg-white',
                error: 'bg-red-2',
                success: 'bg-green-2',
                warning: 'bg-yellow-2',
            }[this.type];
            const rounded = this.rounded ? 'rounded' : '';
            return `${type} ${rounded}`;
        },
    },
};
</script>
