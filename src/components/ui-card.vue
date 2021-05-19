<template>
    <div class="bg-white" :class="cssClasses">
        <h2
            v-if="hasTitle"
            class="m-0 text-base py-4 px-4 md:px-6 border-b border-light-2"
        >
            <slot name="title" />
        </h2>
        <div v-if="hasNotifications" class="border-b border-light-2">
            <slot name="notifications" />
        </div>
        <slot name="image" />
        <div class="py-4 px-4 md:px-6">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'default',
        },
    },
    computed: {
        cssClasses() {
            return {
                default: 'shadow md:rounded-sm',
                elevated: 'shadow-lg md:rounded',
            }[this.variant];
        },
        hasTitle() {
            return Boolean(this.$slots['title']);
        },
        hasNotifications() {
            return Boolean(this.$slots['notifications']);
        },
    },
};
</script>
