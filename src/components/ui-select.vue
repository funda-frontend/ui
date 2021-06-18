<template>
    <div class="relative">
        <select
            class="appearance-none cursor-pointer w-full rounded-sm border bg-white shadow-inner py-2 px-4 outline-none text-base font-normal h-11 disabled:bg-light-3"
            :disabled="disabled"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
                'bg-light-3': disabled,
            }"
            v-bind="$attrs"
            v-on="selectListeners"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :selected="option.value === value"
                :disabled="option.disabled"
                :hidden="option.hidden"
            >
                {{ option.text }}
            </option>
        </select>
        <div class="absolute p-2 inline-flex right-0 top-0 pointer-events-none">
            <ui-icon
                icon="arrowDown"
                class="text-blue-2"
                :class="{ 'text-dark-3': disabled }"
            ></ui-icon>
        </div>
    </div>
</template>

<script>
import UiIcon from './ui-icon.vue';

export default {
    components: { UiIcon },
    inheritAttrs: false,
    props: {
        options: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            default: '',
        },
        isValid: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        selectListeners() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                change(event) {
                    vm.$emit('change', event.target.value);
                },
            });
        },
    },
};
</script>
