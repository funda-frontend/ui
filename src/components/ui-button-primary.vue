<template>
    <ui-button class="fd-px-6 fd-border fd-bg-orange-2 fd-border-orange-2 fd-text-white fd-shadow hover:fd-bg-orange-1 hover:fd-border-orange-1">
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
