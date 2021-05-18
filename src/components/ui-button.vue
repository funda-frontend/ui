<template>
    <a
        v-if="href"
        :href="href"
        :class="cssClasses"
        :disabled="disabled"
        data-test-button
    >
        <slot />
    </a>
    <button
        v-else
        :class="cssClasses"
        :disabled="disabled"
        data-test-button
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null,
        },
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
                    'danger',
                ].includes(value),
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        cssClasses() {
            const withPadding = `${this.small ? 'px-2' : 'px-6'} border`;
            const whiteText = 'text-white hover:text-white';
            const blueText = 'text-blue-2 hover:text-blue-1';
            const blueTextInverted = 'text-blue-1 hover:text-blue-2';
            const disabledBackground =
                'bg-light-1 border-light-1 cursor-not-allowed ';
            const disabledBorder =
                'text-light-1 border-light-1 cursor-not-allowed ';

            const specificClasses = {
                primary: `bg-orange-2 border-orange-2 hover:bg-orange-1 hover:border-orange-1 shadow ${withPadding} ${whiteText}`,
                'primary-alt': `bg-blue-2 border-blue-2 hover:bg-blue-1 hover:border-blue-1 shadow ${withPadding} ${whiteText}`,
                secondary: `bg-white border-blue-2 hover:bg-blue-5 hover:border-blue-1 shadow ${withPadding} ${blueText}`,
                'secondary-alt': `bg-blue-5 border-blue-2 hover:bg-white hover:border-blue-2 shadow ${withPadding} ${blueTextInverted}`,
                tertiary: `${blueText}`,
                transparent: `bg-transparent hover:bg-white hover:bg-opacity-25 ${withPadding} ${whiteText}`,
                danger: `bg-red-1 border-red-1 hover:bg-red-3 hover:border-red-3 shadow ${withPadding} ${whiteText}`,
            }[this.tone];
            const disabledClasses = {
                primary: `shadow ${withPadding} ${disabledBackground} ${whiteText}`,
                'primary-alt': `shadow ${withPadding} ${disabledBackground} ${whiteText}`,
                secondary: `shadow bg-white ${withPadding} ${disabledBorder}`,
                'secondary-alt': `shadow ${withPadding} ${disabledBorder}`,
                tertiary: 'text-light-1',
                transparent: `${withPadding} ${disabledBorder}`,
                danger: `shadow ${withPadding} ${disabledBackground} ${whiteText}`,
            }[this.tone];
            return (
                this.defaultClasses +
                (this.disabled ? disabledClasses : specificClasses)
            );
        },
    },
    created() {
        this.defaultClasses =
            'leading-6 inline-flex h-11 whitespace-no-wrap border-solid rounded-sm align-middle cursor-pointer text-center items-center justify-center focus:outline-none ';
    },
};
</script>
