<template>
    <ui-button class="ui-text-blue-2 ui-border-0 hover:ui-text-blue-1">
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
