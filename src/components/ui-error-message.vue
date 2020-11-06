<template>
    <p class="text-red-1 mt-1">
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
