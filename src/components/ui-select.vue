<template>
    <div class="relative">
        <select
            class="appearance-none cursor-pointer w-full rounded-sm border bg-white shadow-sm py-2 px-4 outline-none text-base font-normal"
            :class="[
                textFieldClasses,
                {
                    'border-light-1 focus:border-dark-3': isValid,
                    'border-red-1 focus:border-red-1': !isValid,
                },
            ]"
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
            <svg
                class="align-middle w-6 h-6 text-blue-2 fill-current"
                viewBox="0 0 48 48"
            >
                <path
                    data-name="Arrow Down"
                    d="M35.66 18.83a1.5 1.5 0 0 0-2.12 0L24 28.37l-9.54-9.54A1.5 1.5 0 0 0 12.34 21l10.57 10.53a1.52 1.52 0 0 0 2.13 0L35.66 21a1.5 1.5 0 0 0 0-2.17z"
                ></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
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
