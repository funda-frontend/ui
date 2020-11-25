<template>
    <div
        class="fd-btn-group inline-flex"
        role="group"
        aria-label="Button group"
    >
        <slot />
    </div>
</template>

<style scoped>
.fd-btn-group .fd-btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
