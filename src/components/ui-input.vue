<template>
    <div class="ui-relative">
        <template v-if="hasPrefix">
            <slot name="prefix"></slot>
        </template>
        <input
            class="ui-w-full ui-rounded-sm ui-border ui-bg-white ui-shadow-sm ui-py-2 ui-px-4 ui-outline-none ui-text-base ui-font-normal"
            :class="{
                'ui-border-light-1 focus:ui-border-dark-3': isValid,
                'ui-border-red-1 focus:ui-border-red-1': !isValid,
                'ui-pl-12': hasPrefix,
                'ui-pr-12': hasSufix,
            }"
            v-bind="$attrs"
            v-on="$listeners"
        />
        <template v-if="hasSufix">
            <slot name="sufix"></slot>
        </template>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: 'text',
            validator: (value) => ['text', 'number'].includes(value),
        },
        hasPrefix: {
            type: Boolean,
        },
        hasSufix: {
            type: Boolean,
        },
        isValid: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
