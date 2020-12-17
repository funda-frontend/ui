<template>
    <div class="px-4 md:px-6">
        <h2
            v-if="hasTitle"
            class="text-base md:text-xl"
            :class="{ 'mb-4': !hasIntro }"
        >
            <slot name="title" />
        </h2>
        <p v-if="hasIntro" class="text-dark-2 mb-4">
            <slot name="intro" />
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        hasTitle() {
            return Boolean(this.$slots['title']);
        },
        hasIntro() {
            return Boolean(this.$slots['intro']);
        },
    },
};
</script>
