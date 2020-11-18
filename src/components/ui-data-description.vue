<template>
    <dd
        class="w-full block md:py-3 border-b border-light-2 pb-3 md:max-w-2/3 md:flex-2/3"
        :class="{ 'md:px-6 px-5 md:pl-0': card }"
    >
        <slot />
    </dd>
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
