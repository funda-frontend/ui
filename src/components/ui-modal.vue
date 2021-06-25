<template>
    <transition enter-class="opacity-0" leave-active-class="opacity-0">
        <div :class="customModalContainerClasses" data-test-modal-container>
            <div>
                <div
                    class="bg-black absolute inset-0 bg-opacity-60"
                    @click="close"
                ></div>
            </div>
            <div
                :class="[
                    customModalClasses,
                    extraModalClasses,
                    wideMode ? 'h-full' : 'md:max-w-2xl max-h-full',
                ]"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
                data-test-modal
            >
                <header class="flex mb-5 mx-12 mt-10">
                    <h2 v-if="$slots.header" class="m-0 font-semibold text-2xl">
                        <slot name="header"></slot>
                    </h2>
                    <button
                        v-if="showCloseIcon"
                        class="focus:outline-none absolute w-11 h-11 top-1.5 right-1.5 p-2"
                        @click="close"
                    >
                        <icon-close class="text-blue-2" />
                    </button>
                </header>
                <section
                    v-if="$slots.body"
                    :class="[
                        noScroll
                            ? 'overflow-hidden'
                            : 'overflow-y-auto max-h-120',
                    ]"
                >
                    <slot name="body"></slot>
                </section>
                <footer
                    v-if="$slots.footer"
                    class="mt-auto pt-5 px-12 pb-5 bg-white w-full z-10 md:rounded-b"
                >
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
import { Close as IconClose } from '@funda/icons/lib/vue';

export default {
    name: 'Modal',
    components: { IconClose },
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
        noScroll: {
            type: Boolean,
            default: false,
        },
        customModalClasses: {
            type: String,
            default:
                'w-full m-auto bg-white md:rounded shadow-xl transition duration-300 ease-in-out relative overflow-hidden flex flex-col',
        },
        extraModalClasses: {
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
