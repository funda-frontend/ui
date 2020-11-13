<template>
    <div>
        <div v-for="item in items" :key="item.value" class="py-2">
            <ui-label
                class="cursor-pointer flex py-1 hover:text-blue-1"
                :for="item.value"
            >
                <input
                    :id="item.value"
                    name="funda_radio_input"
                    class="hidden"
                    type="radio"
                    v-bind="$attrs"
                />
                <div
                    class="bg-blue-5 mr-2 mt-1 w-4 h-4 border border-blue-2 rounded-3xl"
                ></div>
                {{ item.label }}
            </ui-label>
        </div>
    </div>
</template>
<script>
import UiLabel from '@/components/ui-label.vue';
export default {
    components: {
        UiLabel,
    },
    inheritAttrs: false,
    props: {
        items: {
            type: [Array, String],
            required: true,
        },
        selected: {
            type: String,
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
input[type='radio']:checked ~ div {
    background-image: var(--input_checked);
}
input[type='radio']:hover ~ div {
    background-image: var(--input_hover);
}
input[type='radio']:checked:hover ~ div {
    background-image: var(--input_checked);
}
input[type='radio']:disabled ~ div {
    background-image: var(--input-disabled);
    border-color: #ccc;
}
input[type='radio']:disabled:hover ~ div {
    background-image: var(--input-disabled);
}
input[type='radio']:disabled ~ div {
    color: #999;
}
</style>
