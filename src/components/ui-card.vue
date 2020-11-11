<template>
    <div class="bg-white shadow md:rounded-sm">
        <h2
            v-if="hasTitle"
            class="m-0 text-base py-4 px-4 md:px-6 border-b border-light-2"
        >
            <slot name="title" />
        </h2>
        <div v-if="hasNotifications" class="border-b border-light-2">
            <slot name="notifications" />
        </div>
        <div class="py-4 px-4 md:px-6">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        hasTitle() {
            return Boolean(this.$slots['title']);
        },
        hasNotifications() {
            return Boolean(this.$slots['notifications']);
        },
    },
};
</script>
