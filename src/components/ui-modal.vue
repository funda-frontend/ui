<template>
    <transition enter-class="opacity-0" leave-active-class="opacity-0">
        <div :class="customModalContainerClasses" data-test-modal-container>
            <div>
                <div
                    class="modal-backdrop absolute inset-0 bg-opacity-60"
                    @click="close"
                ></div>
            </div>
            <div
                :class="[customModalClasses, wideMode ? '' : 'md:max-w-2xl']"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
                data-test-modal
            >
                <header class="flex m-5">
                    <h2 class="m-0 font-semibold text-2xl">
                        <slot name="header"></slot>
                    </h2>
                    <button
                        v-if="showCloseIcon"
                        class="focus:outline-none absolute w-11 h-11"
                        @click="close"
                    >
                        <ui-icon icon="close" class="text-blue-2" />
                    </button>
                </header>
                <section v-if="$slots.body" class="overflow-y-auto max-h-120">
                    <slot name="body"></slot>
                </section>
                <footer
                    v-if="$slots.footer"
                    class="p-5 sticky bg-white bottom-0 w-full z-10 md:rounded-b"
                >
                    <slot name="footer"></slot>
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
        showCloseIcon: {
            type: Boolean,
        },
        customModalContainerClasses: {
            type: String,
            default:
                'fixed inset-0 flex items-center justify-center z-50 transition duration-500 ease-in-out md:p-9',
        },
        wideMode: {
            type: Boolean,
            default: false,
        },
        disableScroll: {
            type: Boolean,
            default: false,
        },
        customModalClasses: {
            type: String,
            default:
                'w-full h-full m-auto bg-white md:rounded shadow-xl transition duration-300 ease-in-out relative overflow-hidden flex flex-col',
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
/* top/right available in Tailwind v2 not in v1.9.0*/
button {
    top: 0.375rem;
    right: 0.375rem;
    padding: 0.6rem;
}

/* TODO: extend tailwind config with specific background opacity */
.modal-backdrop {
    background: rgba(0, 0, 0, 0.6);
}
</style>
