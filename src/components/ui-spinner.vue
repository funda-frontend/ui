<template>
    <transition name="animate-fade">
        <div v-if="show">
            <div class="spinner animate-spin"></div>
            <slot />
        </div>
    </transition>
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
.animate-fade-enter-active,
.animate-fade-leave-active {
    transition: opacity 0.5s;
}
.animate-fade-enter,
.animate-fade-leave-to {
    opacity: 0;
}

.spinner {
    opacity: 1;
}

.spinner:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    margin-top: -24px;
    margin-left: -24px;
    border-radius: 50%;
    border: 3px solid blue; /*$blue-lighter */
    border-right-color: transparent;
}
</style>
