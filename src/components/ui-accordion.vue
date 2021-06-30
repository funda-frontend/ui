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

                <component
                    :is="isExpanded ? 'icon-arrow-up' : 'icon-arrow-down'"
                    v-if="!disabled"
                    class="text-blue-1"
                />
            </div>
        </summary>

        <div class="mb-5">
            <slot />
        </div>
    </details>
</template>

<script>
import {
    ArrowDown as IconArrowDown,
    ArrowUp as IconArrowUp,
} from '@funda/icons/lib/vue';

export default {
    components: { IconArrowDown, IconArrowUp },
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
