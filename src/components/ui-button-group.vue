<template>
    <div
        class="ui-btn-group inline-flex"
        role="group"
        aria-label="Button group"
    >
        <slot />
    </div>
</template>

<style scoped>
.ui-btn-group button,
.ui-btn-group a {
    border-radius: 0;
    margin-left: -0.0625rem;
}

.ui-btn-group button:first-child,
.ui-btn-group a:first-child {
    border-top-left-radius: 0.125rem;
    border-bottom-left-radius: 0.125rem;
}

.ui-btn-group button:last-child,
.ui-btn-group a:last-child {
    border-top-right-radius: 0.125rem;
    border-bottom-right-radius: 0.125rem;
}
</style>
