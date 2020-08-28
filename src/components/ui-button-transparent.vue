<template>
    <ui-button class="ui-px-6 ui-border ui-text-white ui-bg-transparent hover:ui-bg-white hover:ui-bg-opacity-25">
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
