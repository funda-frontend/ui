<template>
    <div class="relative">
        <template v-if="hasPrefix">
            <slot name="prefix"></slot>
        </template>
        <input
            class="w-full rounded-sm border bg-white shadow-sm py-2 px-4 outline-none text-base font-normal"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
                'pl-12': hasPrefix,
                'pr-12': hasSufix,
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
