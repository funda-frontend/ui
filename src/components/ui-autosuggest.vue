<template>
    <div @keydown="handleKeyDown">
        <ui-input :value="value" type="text">
            <template #sufix>
                <div
                    class="text-light-1 py-2 px-4 absolute top-0 right-0 cursor-pointer"
                    @click="clearInput"
                >
                    <ui-icon v-if="isDirty" icon="closeCircle"></ui-icon>
                </div>
            </template>
        </ui-input>
        <div v-if="isDirty && list.length">
            <ul
                v-for="(item, index) in list"
                :key="item.value"
                class="border border-solid border-light-1 pb-0 border-t-0"
            >
                <li
                    class="p-4 border-b border-light-1 hover:bg-blue-5 cursor-pointer"
                    :class="[
                        { 'bg-blue-5': isItemOnSelection(index) },
                        { 'p-0': isLastItem(index) },
                    ]"
                >
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import UiInput from './ui-input.vue';
import UiIcon from './ui-icon.vue';

export default {
    components: { UiInput, UiIcon },
    props: {
        list: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            currentItem: 0,
        };
    },
    computed: {
        isDirty() {
            return this.value !== '';
        },
    },
    // mounted() {
    //     document.addEventListener("keyup", this.nextItem);
    // },
    methods: {
        clearInput() {
            this.$emit('clear-input');
        },
        handleKeyDown(event) {
            if (event.keyCode == 38 && this.currentItem > 0) {
                this.currentItem--;
            } else if (
                event.keyCode == 40 &&
                this.currentItem < this.list.length - 1
            ) {
                this.currentItem++;
            } else if (event.keyCode == 13 && this.list.length > 0) {
                this.$emit('item-selected', this.list[this.currentItem]);
            }
        },
        isItemOnSelection(index) {
            return this.currentItem === index;
        },
        isLastItem(index) {
            return index === this.list.length - 1;
        },
    },
};
</script>
