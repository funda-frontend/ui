<template>
    <transition enter-class="opacity-0" leave-active-class="opacity-0">
        <div
            :class="
                customModalContainerClasses
                    ? customModalContainerClasses
                    : 'fixed inset-0 flex items-center justify-center z-50 modal-container transition duration-500 ease-in-out'
            "
        >
            <div v-if="showBackdrop">
                <div
                    class="absolute inset-0 bg-black opacity-25"
                    @click="close"
                ></div>
            </div>
            <div
                :class="[
                    customModalClasses
                        ? customModalClasses
                        : 'w-full h-full m-auto bg-white md:rounded shadow-md transition duration-300 ease-in-out relative',
                    wideMode ? '' : 'md:h-auto md:max-w-2xl',
                ]"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="flex m-5">
                    <slot name="header"></slot>
                    <button
                        v-if="showCloseIcon"
                        class="focus:outline-none absolute top-1 right-1"
                        @click="close"
                    >
                        <ui-icon icon="close" class="text-blue-2" />
                    </button>
                </header>
                <slot name="body"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import UiIcon from './ui-icon.vue';
export default {
    name: 'Modal',
    components: { UiIcon },
    props: {
        showCloseIcon: {
            type: Boolean,
        },
        showBackdrop: {
            type: Boolean,
        },
        customModalContainerClasses: {
            type: String,
            default: '',
        },
        wideMode: {
            type: Boolean,
            default: false,
        },
        customModalClasses: {
            type: String,
            default: '',
        },
    },
    beforeMount() {
        const onEscape = (e) => {
            if (e.keyCode === 27) {
                this.close();
            }
        };
        document.addEventListener('keydown', onEscape);
        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', onEscape);
        });
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
/* below styles can be done using a class in Tailwind 2.0 or by adding it to our own Tailwind config for now */
button {
    top: 0.375rem;
    right: 0.375rem;
}
</style>
