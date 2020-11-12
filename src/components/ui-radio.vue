<template>
    <div>
        <div v-for="item in items" :key="item.value" class="pt-2 pb-2">
            <input
                :name="item.value"
                class="absolute h-px w-px -m-px p-0"
                type="radio"
            />
            <img
                class="bg-blue-5 focus:bg-radio-button w-4 h-4 border border-blue-2 border-solid rounded-3xl"
            />

            <ui-label class="cursor-pointer" :for="item.value">
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
