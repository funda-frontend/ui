<template>
    <button :name="name" :disabled="disabled" class="ui-border-dashed fd-border-4 fd-border-orange-1">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    }
};
</script>
