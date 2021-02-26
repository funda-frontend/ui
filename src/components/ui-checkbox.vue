<template>
    <div>
        <div class="py-2">
            <input
                :id="id"
                :name="name"
                class="hidden"
                type="checkbox"
                v-bind="$attrs"
                v-on="$listeners"
            />
            <ui-label
                class="cursor-pointer flex py-1 hover:text-blue-1"
                :for="id"
            >
                <div
                    class="bg-blue-5 border border-solid rounded-sm mr-2 w-4 h-4 border-blue-2"
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
            default: 'funda_checkbox_input',
        },
    },
};
</script>
<style scoped>
label {
    --input_checked: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDA1MTdmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjU5IDkuNDVsNS01QTEgMSAwIDEgMSAxMyA1Ljg4bC01LjY3IDUuNjZhMSAxIDAgMCAxLS43OS4yOSAxIDEgMCAwIDEtLjY5LS4yOUwzIDguN2ExIDEgMCAwIDEgMS40My0xLjQxeiIvPgo8L3N2Zz4K);
    --input_hover: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZmlsbD0iI2MxZGJlNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi41OSA5LjQ1bDUtNUExIDEgMCAxIDEgMTMgNS44OGwtNS42NyA1LjY2YTEgMSAwIDAgMS0uNzkuMjkgMSAxIDAgMCAxLS42OS0uMjlMMyA4LjdhMSAxIDAgMCAxIDEuNDMtMS40MXoiLz4KPC9zdmc+Cg==);
    --input-disabled: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZmlsbD0iIzk5OSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi41OSA5LjQ1bDUtNUExIDEgMCAxIDEgMTMgNS44OGwtNS42NyA1LjY2YTEgMSAwIDAgMS0uNzkuMjkgMSAxIDAgMCAxLS42OS0uMjlMMyA4LjdhMSAxIDAgMCAxIDEuNDMtMS40MXoiLz4KPC9zdmc+Cg==);
}
input[type='checkbox']:checked ~ label > div {
    background-image: var(--input_checked);
}
input[type='checkbox']:hover ~ label > div {
    background-image: var(--input_hover);
}
input[type='checkbox']:checked:hover ~ label > div {
    background-image: var(--input_checked);
}
input[type='checkbox']:disabled ~ label {
    color: #999;
}
input[type='checkbox']:disabled ~ label > div {
    border-color: #ccc;
    background-color: #f7f7f7;
}
input[type='checkbox']:disabled:checked ~ label > div {
    border-color: #ccc;
    background-color: #f7f7f7;
    background-image: var(--input-disabled);
}
input[type='checkbox']:disabled:checked:hover ~ label > div {
    background-image: var(--input-disabled);
}
input[type='checkbox']:disabled:hover ~ label > div {
    background-image: none;
}
</style>
