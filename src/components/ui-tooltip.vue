<template>
    <div
        role="tooltip"
        class="absolute w-full p-3 max-w-sm rounded-sm z-50 shadow"
        :class="backgroundClass"
    >
        <slot />
        <div
            class="bg-current absolute w-4 h-4 left-1/2 overflow-hidden transform -translate-x-1/2 translate-y-4 bottom-0"
        >
            <div
                class="absolute w-3 h-3 shadow left-1/2 top-0 transform rotate-45 -translate-x-1/2 -translate-y-1/2"
                :class="backgroundClass"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: 'white',
            validator: (value) => ['white', 'blue', 'light'].includes(value),
        },
    },
    computed: {
        backgroundClass() {
            const specificClasses = {
                white: 'bg-white',
                blue: 'bg-blue-5',
                light: 'bg-light-3',
            }[this.background];

            return specificClasses;
        },
    },
};
</script>
