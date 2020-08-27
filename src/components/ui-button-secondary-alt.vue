<template>
    <ui-button class="fd-bg-transparent fd-border-blue-2 fd-text-blue-2">
        <slot/>
    </ui-button>
</template>

<script>
    import UiButton from '@/components/ui-button';
    export default {
        components: {
            UiButton
        }
    }
</script>
