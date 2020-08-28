<template>
    <button class="ui-leading-6 ui-inline-flex ui-h-11 ui-whitespace-no-wrap ui-border-solid ui-rounded-sm ui-align-middle ui-cursor-pointer ui-text-center ui-items-center ui-justify-center">
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
