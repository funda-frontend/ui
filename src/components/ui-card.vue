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
        <div
            v-if="hasMedia"
            class="card__image mb-4 overflow-hidden relative h-0 pt-40 md:rounded-t-sm"
        >
            <slot name="media" />
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
        hasMedia() {
            return Boolean(this.$slots['media']);
        },
    },
};
</script>

<style scoped>
.card__image * {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}
</style>
