<template>
    <ui-button class="fd-px-6 fd-border fd-bg-blue-2 fd-text-white fd-border-blue-2 fd-shadow hover:fd-bg-blue-1 hover:fd-border-blue-1">
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
