<template>
    <div
        class="ui-relative ui-container ui-rounded-sm ui-rounded-sm ui-border ui-border-light-1 ui-bg-white ui-cursor-pointer ui-shadow-sm"
    >
        <select
            class="ui-container ui-cursor-pointer ui-outline-none ui-text-base ui-font-normal ui-leading-normal ui-p-2 ui-pl-4"
            @change="onChange"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </select>
        <div
            class="ui-absolute ui-p-2 ui-inline-flex ui-right-0 ui-top-0 ui-pointer-events-none"
        >
            <svg
                class="ui-align-middle ui-w-6 ui-h-6 ui-text-blue-2 ui-fill-current"
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
    props: {
        options: {
            type: Array,
            required: true,
        },
        selected: {
            type: Number,
            required: true,
        },
    },
    methods: {
        onChange() {
            this.$emit('change');
        },
    },
};
</script>
<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
</style>
