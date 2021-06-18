<template>
    <div class="relative">
        <template v-if="hasPrefix">
            <slot name="prefix"></slot>
        </template>
        <input
            class="w-full rounded-sm border bg-white shadow-inner py-2 px-4 outline-none text-base font-normal h-11 disabled:bg-light-3"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
                'pl-12': hasPrefix,
                'pr-12': hasSufix,
            }"
            v-bind="$attrs"
            v-on="inputListeners"
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
        isValid: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        inputListeners() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                input(event) {
                    vm.$emit('input', event.target.value);
                },
            });
        },
        hasPrefix() {
            return Boolean(this.$slots['prefix']);
        },
        hasSufix() {
            return Boolean(this.$slots['sufix']);
        },
    },
};
</script>
