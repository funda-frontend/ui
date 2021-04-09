<template>
    <div
        class="group shadow relative rounded-sm bg-white border-solid border-l-4 flex p-4 pr-10 m-3"
        :class="[borderColorClass]"
    >
        <div class="mr-3" :aria-label="type">
            <ui-icon
                v-if="type === 'information'"
                icon="info"
                class="text-blue-1"
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
        </div>

        <div class="m-0 flex-auto overflow-hidden">
            <slot />
        </div>

        <ui-button
            tone="tertiary"
            class="top-0 right-0 absolute px-2 opacity-0 group-hover:opacity-100 focus:outline-none active:outline-none hover:outline-none"
            @click="close"
        >
            <span class="w-6 h-6" aria-hidden="true">
                <ui-icon icon="close"></ui-icon>
            </span>
        </ui-button>
    </div>
</template>

<script>
import UiButton from './ui-button.vue';
import UiIcon from './ui-icon.vue';

export default {
    components: {
        UiButton,
        UiIcon,
    },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
        show: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        borderColorClass() {
            return {
                information: 'border-blue-2',
                error: 'border-red-1',
                success: 'border-green-1',
                warning: 'border-yellow-1',
            }[this.type];
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>
