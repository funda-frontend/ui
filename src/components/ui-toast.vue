<template>
    <div
        class="ui-fixed ui-top-0 ui-right-0 ui-overflow-x-hidden ui-z-175 ui-max-w-sm"
    >
        <div
            class="ui-shadow ui-relative ui-rounded-sm ui-bg-white ui-border-solid ui-border-l-4 ui-flex ui-items-baseline ui-p-4 ui-pr-10 ui-m-3"
            :class="borderClass"
        >
            <span :class="textClass" class="ui-mr-3" :aria-label="type">
                <svg
                    :class="textClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                >
                    <g :id="type">
                        <path
                            d="M33.91,18.66a1.5,1.5,0,0,0-2.12,0l-11,11L16.23,25a1.5,1.5,0,1,0-2.12,2.12l5.65,5.65h0a1.5,1.5,0,0,0,2.12,0h0l12-12A1.5,1.5,0,0,0,33.91,18.66Z"
                        />
                        <path
                            d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,37A17,17,0,1,1,41,24,17,17,0,0,1,24,41Z"
                        />
                    </g>
                </svg>
            </span>

            <p class="ui-m-0 ui-flex-auto ui-overflow-hidden">
                <slot />
            </p>

            <ui-button
                tone="tertiary"
                class="ui-top-0 ui-right-0 ui-absolute ui-px-2"
            >
                <span aria-hidden="true">
                    <svg
                        class="ui-text-blue-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <path
                            d="M26.12 24l10.61-10.61a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0L24 21.88 13.39 11.27a1.5 1.5 0 1 0-2.12 2.12L21.88 24 11.27 34.61a1.5 1.5 0 1 0 2.12 2.12L24 26.12l10.61 10.61a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12z"
                        ></path>
                    </svg>
                </span>
            </ui-button>
        </div>
    </div>
</template>

<script>
import UiButton from '@/components/ui-button.vue';

export default {
    components: {
        UiButton,
    },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
    },
    computed: {
        textClass() {
            return {
                information: 'ui-text-blue-2',
                error: 'ui-text-red-2',
                success: 'ui-text-green-2',
                warning: 'ui-text-yellow-2',
            }[this.type];
        },
        borderClass() {
            return {
                information: 'ui-border-blue-2',
                error: 'ui-border-red-1',
                success: 'ui-border-green-1',
                warning: 'ui-border-yellow-1',
            }[this.type];
        },
    },
};
</script>

<style scoped>
svg:not([fill]) {
    fill: currentColor;
}
</style>
