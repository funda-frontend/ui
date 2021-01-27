<template>
    <transition name="modal">
        <div
            class="fixed inset-0 flex items-center justify-center z-50 modal-container transition duration-500 ease-in-out"
        >
            <div v-if="showBackdrop">
                <div
                    class="absolute inset-0 bg-black opacity-25"
                    @click="close"
                ></div>
            </div>
            <div
                :class="[
                    customModalClass,
                    'w-2/5 m-auto p-5 bg-white rounded-lg shadow-md transition duration-300 ease-in-out relative',
                ]"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="flex">
                    <slot name="header">
                        This is the default tile!

                        <button
                            v-if="closeIcon"
                            class="focus:outline-none absolute top-1 right-1"
                            @click="close"
                        >
                            <ui-icon icon="close" />
                        </button>
                    </slot>
                </header>
                <section class="my-5">
                    <slot name="body">
                        I'm the default body!
                    </slot>
                </section>
                <footer>
                    <slot name="footer">
                        I'm the default footer!

                        <button
                            type="button"
                            aria-label="Close modal"
                            @click="close"
                        >
                            Close me!
                        </button>
                    </slot>
                </footer>
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
        closeIcon: {
            type: Boolean,
        },
        customModalClass: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showBackdrop: true,
        };
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

<style>
.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}
</style>
