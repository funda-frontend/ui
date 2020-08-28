<template>
    <ui-button class="fd-px-6 fd-border fd-text-white fd-bg-transparent hover:fd-bg-white hover:fd-bg-opacity-25">
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
