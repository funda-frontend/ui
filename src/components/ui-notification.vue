<template>
    <div :class="cssClasses" class="items-center flex p-3">
        <span class="mr-3" :aria-label="type">
            <icon-info
                v-if="type === 'information'"
                class="text-dark-1"
            ></icon-info>

            <icon-error v-if="type === 'error'" class="text-red-1"></icon-error>

            <icon-success
                v-if="type === 'success'"
                class="text-green-1"
            ></icon-success>

            <icon-warning
                v-if="type === 'warning'"
                class="text-yellow-1"
            ></icon-warning>
        </span>

        <slot name="notificationBody" />
    </div>
</template>

<script>
import {
    Error as IconError,
    Warning as IconWarning,
    Success as IconSuccess,
    Info as IconInfo,
} from '@funda/icons/lib/vue';

export default {
    components: { IconError, IconWarning, IconSuccess, IconInfo },
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
