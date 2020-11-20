<template>
    <dt
        class="fd-data-list__dt w-full block text-dark-3 font-normal md:py-3 pt-3 md:border-b border-light-2 md:max-w-1/3 md:flex-1/3"
        :class="{ 'md:px-6 px-5': card }"
    >
        <slot />
    </dt>
</template>

<script>
export default {
    props: {
        card: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
