<template>
    <div
        v-if="show"
        class="ui-spinner animate-spin absolute box-border border-3 rounded-full inset-1/2"
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
                small: 'w-4 h-4 -mt-2 -ml-2',
                medium: 'w-8 h-8 -mt-4 -ml-4',
                large: 'w-16 h-16 -mt-8 -ml-8',
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

<style scoped>
.ui-spinner {
    content: '';
    border-right-color: transparent;
}
</style>
