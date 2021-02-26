<template>
    <div class="relative">
        <textarea
            class="w-full rounded-sm font-proxima text-base border border-solid bg-white shadow-sm py-2 px-4 outline-none text-base font-normal disabled:bg-light-3"
            :class="{
                'border-light-1 focus:border-dark-3': isValid,
                'border-red-1 focus:border-red-1': !isValid,
            }"
            v-bind="$attrs"
            v-on="$listeners"
        >
        </textarea>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        isValid: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
