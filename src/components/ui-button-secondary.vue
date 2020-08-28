<template>
    <ui-button class="fd-px-6 fd-border fd-bg-white fd-border-blue-2 fd-text-blue-2 hover:fd-text-blue-1 hover:fd-bg-blue-5 hover:fd-border-blue-1 fd-shadow">
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
