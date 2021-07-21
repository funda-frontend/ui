<template>
    <div :class="{ 'md:flex-1': alignHorizontal }">
        <div class="py-2">
            <input
                :id="id"
                :name="name"
                class="hidden"
                type="radio"
                v-bind="$attrs"
                v-on="$listeners"
            />
            <ui-label
                class="cursor-pointer flex py-1 hover:text-blue-1"
                :class="{ 'items-center': centerRadioVertically }"
                :for="id"
            >
                <div
                    class="bg-blue-5 mr-2 mt-1 w-4 h-4 border border-blue-2 rounded-3xl"
                ></div>
                <slot />
            </ui-label>
        </div>
    </div>
</template>
<script>
import UiLabel from './ui-label.vue';

export default {
    components: {
        UiLabel,
    },
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: 'funda_radio_input',
        },
        alignHorizontal: {
            type: Boolean,
            default: false,
        },
        centerRadioVertically: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style scoped>
label {
    --input_checked: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMwMDUxN2YiLz4KPC9zdmc+Cg==);
    --input_hover: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiNjMWRiZTYiLz4KPC9zdmc+Cg==);
    --input-disabled: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiM5OTkiLz4KPC9zdmc+Cg==);
}
input[type='radio']:checked ~ label > div {
    background-image: var(--input_checked);
}
input[type='radio']:hover ~ label > div {
    background-image: var(--input_hover);
}
input[type='radio']:checked:hover ~ label > div {
    background-image: var(--input_checked);
}
input[type='radio']:disabled ~ label {
    color: #999;
}
input[type='radio']:disabled ~ label > div {
    border-color: #ccc;
    background-color: #f7f7f7;
}
input[type='radio']:disabled:checked ~ label > div {
    border-color: #ccc;
    background-color: #f7f7f7;
    background-image: var(--input-disabled);
}
input[type='radio']:disabled:checked:hover ~ label > div {
    background-image: var(--input-disabled);
}
input[type='radio']:disabled:hover ~ label > div {
    background-image: none;
}
</style>
