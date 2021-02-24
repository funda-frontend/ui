<template>
    <ui-card>
        <template #image>
            <div class="overflow-hidden relative h-0 pt-40 md:rounded-t-sm">
                <img
                    class="absolute block w-full h-full top-0 left-0 object-cover"
                    v-bind="$attrs"
                    loading="lazy"
                />
            </div>
        </template>
        Card content
    </ui-card>
</template>

<script>
import UiCard from './ui-card.vue';

export default {
    components: {
        UiCard,
    },
    inheritAttrs: false,
};
</script>
