<template>
    <ui-button class="fd-bg-blue-2 fd-text-white fd-border-blue-2">
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
