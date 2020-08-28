<template>
    <ui-button class="ui-px-6 ui-border ui-bg-blue-5 ui-border-blue-2 ui-text-blue-1 hover:ui-bg-white hover:ui-text-blue-2 hover:ui-border-blue-2 ui-shadow">
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
