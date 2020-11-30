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
.fd-btn-group button,
.fd-btn-group a {
    border-radius: 0;
    margin-left: -0.0625rem;
}

.fd-btn-group button:first-child,
.fd-btn-group a:first-child {
    border-top-left-radius: 0.125rem;
    border-bottom-left-radius: 0.125rem;
}

.fd-btn-group button:last-child,
.fd-btn-group a:last-child {
    border-top-right-radius: 0.125rem;
    border-bottom-right-radius: 0.125rem;
}
</style>
