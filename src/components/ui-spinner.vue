<template>
    <div
        v-if="show"
        class="animate-spin border-2 rounded-full border-r-transparent"
        :class="[sizeClasses, toneClasses]"
    ></div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'small',
            validator: (value) => ['small', 'medium', 'large'].includes(value),
        },
        show: {
            type: Boolean,
            default: false,
        },
        tone: {
            type: String,
            default: 'primary',
            validator: (value) =>
                ['primary', 'secondary', 'white'].includes(value),
        },
    },
    computed: {
        sizeClasses() {
            const classes = {
                small: 'w-4 h-4',
                medium: 'w-8 h-8',
                large: 'w-16 h-16',
            }[this.size];
            return classes;
        },
        toneClasses() {
            const classes = {
                primary: 'border-orange-2',
                secondary: 'border-blue-2',
                white: 'border-white',
            }[this.tone];
            return classes;
        },
    },
};
</script>
