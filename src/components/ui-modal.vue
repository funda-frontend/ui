<template>
    <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center z-50"
    >
        <transition
            enter-active-class="transition-all transition-fast ease-out-quad"
            leave-active-class="transition-all transition-medium ease-in-quad"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            appear
            @before-leave="backdropLeaving = true"
            @after-leave="backdropLeaving = false"
        >
            <div v-if="showBackdrop">
                <div
                    class="absolute inset-0 bg-black opacity-25"
                    @click="close"
                ></div>
            </div>
        </transition>

        <transition
            enter-active-class="transition-all transition-fast ease-out-quad"
            leave-active-class="transition-all transition-medium ease-in-quad"
            enter-class="opacity-0 scale-70"
            enter-to-class="opacity-100 scale-100"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-70"
            appear
            @before-leave="cardLeaving = true"
            @after-leave="cardLeaving = false"
        >
            <div
                :class="[
                    customModalClass,
                    'w-2/5 m-auto p-5 bg-white rounded-lg shadow-md transition duration-300 ease-in-out relative',
                ]"
            >
                <header class="flex">
                    <slot v-if="$slots.header" name="header"
                        >Default header</slot
                    >
                    <button
                        v-if="closeIcon"
                        class="focus:outline-none absolute top-1 right-1"
                        @click="close"
                    >
                        <ui-icon icon="close" />
                    </button>
                </header>

                <section v-if="$slots.body" class="my-5">
                    <slot name="body" />
                </section>

                <footer v-if="$slots.footer">
                    <slot name="footer" />
                </footer>
            </div>
        </transition>
    </div>
</template>

<script>
import UiIcon from './ui-icon.vue';
export default {
    components: { UiIcon },
    props: {
        open: {
            type: Boolean,
        },
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
            showModal: false,
            showBackdrop: false,
            backdropLeaving: false,
            cardLeaving: false,
        };
    },
    computed: {
        leaving() {
            return this.backdropLeaving || this.cardLeaving;
        },
    },
    watch: {
        open: {
            handler(newValue) {
                if (newValue) {
                    this.show();
                } else {
                    this.close();
                }
            },
            immediate: true,
        },
        leaving(newValue) {
            if (newValue === false) {
                this.showModal = false;
                this.$emit('close');
            }
        },
    },
    beforeMount() {
        const onEscape = (e) => {
            if (this.open && e.keyCode === 27) {
                this.close();
            }
        };
        document.addEventListener('keydown', onEscape);
        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', onEscape);
        });
    },
    methods: {
        show() {
            this.showModal = true;
            this.showBackdrop = true;
        },
        close() {
            this.showModal = false;
            this.showBackdrop = false;
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
