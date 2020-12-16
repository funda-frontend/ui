<template>
    <a v-if="href" :href="href" :class="cssClasses">
        <slot />
    </a>
    <button v-else :class="cssClasses">
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
                ].includes(value),
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
            }[this.tone];
            return this.defaultClasses + specificClasses;
        },
    },
    created() {
        this.defaultClasses =
            'leading-6 inline-flex h-11 whitespace-no-wrap border-solid rounded-sm align-middle cursor-pointer text-center items-center justify-center ';
    },
};
</script>
