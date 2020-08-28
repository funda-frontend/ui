<template>
    <ui-button class="ui-px-6 ui-border ui-bg-blue-2 ui-text-white ui-border-blue-2 ui-shadow hover:ui-bg-blue-1 hover:ui-border-blue-1">
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
