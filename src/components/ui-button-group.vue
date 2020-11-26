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
.fd-btn-group button:not(:last-child),
.fd-btn-group a:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.fd-btn-group button:not(:first-child),
.fd-btn-group a:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -0.0625rem;
}
</style>
