<template>
    <details
        :open="open"
        class="border-light-2 border-solid border-0 border-b"
        @toggle="updateValue($event.target.open)"
    >
        <summary
            class="py-3 cursor-pointer outline-none list-none"
            :class="disabled ? 'pointer-events-none' : ''"
        >
            <div class="flex justify-between items-center">
                <slot name="title"></slot>

                <ui-icon
                    v-if="!disabled"
                    class="text-blue-1"
                    :icon="isExpanded ? 'arrowUp' : 'arrowDown'"
                />
            </div>
        </summary>

        <div class="mb-5">
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
        disabled: { type: Boolean, default: false },
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
    mounted() {
        this.isExpanded = this.open;
    },
    methods: {
        updateValue(value) {
            this.isExpanded = value;
            this.$emit('change', value);
        },
    },
};
</script>
