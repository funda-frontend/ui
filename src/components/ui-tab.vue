<template>
    <button
        role="tab"
        class="float-left cursor-pointer outline-none focus:outline-none leading-7 border-b-2 py-2 px-6 hover:bg-blue-5"
        :aria-selected="selected"
        :class="{
            'text-blue-2 border-blue-2 bg-blue-5': selected,
            'text-dark-2 border-light-1 bg-white': !selected,
        }"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
