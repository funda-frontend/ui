<template>
    <div
        v-if="show"
        class="spinner animate-spin absolute w-6 h-6 box-border border-3 border-blue-2 rounded-full -mt-3 -ml-3 inset-1/2"
    ></div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.spinner {
    content: '';
    border-right-color: transparent;
}
</style>
