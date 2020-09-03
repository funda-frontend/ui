<template>
    <button
        :class="cssClasses"
        class="ui-leading-6 ui-inline-flex ui-h-11 ui-whitespace-no-wrap ui-border-solid ui-rounded-sm ui-align-middle ui-cursor-pointer ui-text-center ui-items-center ui-justify-center"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        tone: {
            type: String,
            default: 'primary',
            validator: (value) =>
                [
                    'primary',
                    'primary-alt',
                    'secondary',
                    'secondary-alt',
                    'tertiary',
                    'transparent',
                ].includes(value),
        },
    },
    computed: {
        cssClasses() {
            return {
                primary:
                    'ui-px-6 ui-border ui-bg-orange-2 ui-border-orange-2 ui-text-white ui-shadow hover:ui-bg-orange-1 hover:ui-border-orange-1',
                'primary-alt':
                    'ui-px-6 ui-border ui-bg-blue-2 ui-text-white ui-border-blue-2 ui-shadow hover:ui-bg-blue-1 hover:ui-border-blue-1',
                secondary:
                    'ui-px-6 ui-border ui-bg-white ui-border-blue-2 ui-text-blue-2 hover:ui-text-blue-1 hover:ui-bg-blue-5 hover:ui-border-blue-1 ui-shadow',
                'secondary-alt':
                    'ui-px-6 ui-border ui-bg-blue-5 ui-border-blue-2 ui-text-blue-1 hover:ui-bg-white hover:ui-text-blue-2 hover:ui-border-blue-2 ui-shadow',
                tertiary: 'ui-text-blue-2 ui-border-0 hover:ui-text-blue-1',
                transparent:
                    'ui-px-6 ui-border ui-text-white ui-bg-transparent hover:ui-bg-white hover:ui-bg-opacity-25',
            }[this.tone];
        },
    },
};
</script>
