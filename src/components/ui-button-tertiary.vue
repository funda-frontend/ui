<template>
    <ui-button class="fd-text-blue-2 fd-border-0 hover:fd-text-blue-1">
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
