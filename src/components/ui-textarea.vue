<template>
    <div class="relative">
        <textarea
            v-model="currentValue"
            class="w-full rounded-sm border bg-white shadow-sm py-2 px-4 outline-none text-base font-normal"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
            }"
            v-bind="$attrs"
            v-on="$listeners"
        >
        </textarea>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        isValid: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            currentValue: this.getDefaultValue(),
        };
    },
    methods: {
        getDefaultValue() {
            if (this.$slots.default && this.$slots.default.length) {
                return this.$slots.default[0].text;
            }
            return '';
        },
    },
};
</script>
