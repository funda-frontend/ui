<template>
    <button class="fd-leading-6 fd-inline-flex fd-h-11 fd-whitespace-no-wrap fd-border-solid fd-rounded-sm fd-align-middle fd-cursor-pointer fd-text-center fd-items-center fd-justify-center">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
         disabled: {
            type: Boolean,
            default: false,
        },
    }
};
</script>
