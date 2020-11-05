<template>
    <p class="ui-text-red-1 ui-mt-1">
        {{ message }}
    </p>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
};
</script>
