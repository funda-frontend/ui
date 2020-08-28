<template>
    <ui-button class="ui-px-6 ui-border ui-bg-orange-2 ui-border-orange-2 ui-text-white ui-shadow hover:ui-bg-orange-1 hover:ui-border-orange-1">
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
