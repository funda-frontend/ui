<template>
    <div class="relative">
        <textarea
            class="w-full rounded-sm border bg-white shadow-sm py-2 px-4 outline-none text-base font-normal"
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
    props: {
        isValid: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
