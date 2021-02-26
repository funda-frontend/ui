<template>
    <a v-if="href" :href="href" :class="cssClasses" :disabled="disabled">
        <slot />
    </a>
    <button v-else :class="cssClasses" :disabled="disabled" v-on="$listeners">
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
    },
    computed: {
        cssClasses() {
            const specificClasses = {
                primary:
                    'px-6 border bg-orange-2 border-orange-2 text-white shadow hover:bg-orange-1 hover:border-orange-1 hover:text-white',
                'primary-alt':
                    'px-6 border bg-blue-2 text-white border-blue-2 shadow hover:bg-blue-1 hover:border-blue-1',
                secondary:
                    'px-6 border bg-white border-blue-2 text-blue-2 hover:text-blue-1 hover:bg-blue-5 hover:border-blue-1 shadow',
                'secondary-alt':
                    'px-6 border bg-blue-5 border-blue-2 text-blue-1 hover:bg-white hover:text-blue-2 hover:border-blue-2 shadow',
                tertiary: 'text-blue-2 border-0 hover:text-blue-1',
                transparent:
                    'px-6 border text-white bg-transparent hover:bg-white hover:bg-opacity-25',
                danger:
                    'px-6 border bg-red-1 border-red-1 text-white hover:bg-red-3 hover:border-red-3 hover:text-white',
            }[this.tone];
            return (
                this.defaultClasses +
                (this.disabled ? this.disabledClasses : specificClasses)
            );
        },
    },
    created() {
        this.defaultClasses =
            'font-proxima text-base no-underline leading-6 inline-flex h-11 whitespace-no-wrap border-solid rounded-sm align-middle cursor-pointer text-center items-center justify-center ';
        this.disabledClasses =
            'px-6 border bg-light-1 border-light-1 text-light-2 shadow hover:bg-light-1 hover:border-light-1 hover:text-light-2 cursor-not-allowed ';
    },
};
</script>
