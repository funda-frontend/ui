<template>
    <div class="relative">
        <select
            class="appearance-none cursor-pointer w-full rounded-sm border bg-white shadow-sm py-2 px-4 outline-none text-base font-normal h-11"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
            }"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </select>
        <div class="absolute p-2 inline-flex right-0 top-0 pointer-events-none">
            <ui-icon icon="arrowDown" class="text-blue-2"></ui-icon>
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
        selected: {
            type: Number,
            required: true,
        },
        isValid: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
