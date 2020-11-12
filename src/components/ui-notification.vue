<template>
    <div :class="cssClasses" class="items-center flex p-3">
        <span class="mr-3" :aria-label="type">
            <ui-icon
                v-if="type === 'information'"
                icon="info"
                class="text-dark-1"
            ></ui-icon>

            <ui-icon
                v-if="type === 'error'"
                icon="error"
                class="text-red-1"
            ></ui-icon>

            <ui-icon
                v-if="type === 'success'"
                icon="success"
                class="text-green-1"
            ></ui-icon>

            <ui-icon
                v-if="type === 'warning'"
                icon="warning"
                class="text-yellow-1"
            ></ui-icon>
        </span>

        <slot name="notificationBody" />
    </div>
</template>

<script>
import UiIcon from './ui-icon.vue';

export default {
    components: { UiIcon },
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
