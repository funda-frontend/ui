<template>
    <details :open="open" @toggle="updateValue($event.target.open)">
        <summary class="list-none outline-none">
            <!-- On safari, display flex inside <summary> can only work if it's wrapped in a <div></div></summary> -->
            <div class="flex justify-between cursor-pointer outline-none py-2">
                <slot name="title"></slot>

                <ui-icon
                    class="text-blue-2"
                    :icon="isExpanded ? 'arrowDown' : 'arrowUp'"
                />
            </div>
        </summary>

        <div v-if="!!$slots.default" class="pb-5">
            <slot />
        </div>
    </details>
</template>

<script>
import UiIcon from './ui-icon.vue';

export default {
    components: { UiIcon },
    props: {
        open: { type: Boolean, default: false },
    },
    data() {
        return {
            isExpanded: false,
        };
    },
    watch: {
        open: function (val) {
            this.updateValue(val);
        },
    },
    methods: {
        updateValue(value) {
            this.isExpanded = value;
        },
    },
};
</script>
