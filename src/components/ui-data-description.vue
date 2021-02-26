<template>
    <dd
        class="w-full block ml-0 md:py-3 box-border border-0 border-b border-solid border-light-2 pb-3 md:max-w-2/3 md:flex-2/3"
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
