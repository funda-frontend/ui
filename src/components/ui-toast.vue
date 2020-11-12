<template>
    <div class="fixed top-0 right-0 overflow-x-hidden z-175 max-w-sm">
        <transition name="animate-fade-right">
            <div
                v-if="show"
                class="group shadow relative rounded-sm bg-white border-solid border-l-4 flex p-4 pr-10 m-3"
                :class="[borderColorClass]"
            >
                <div class="mr-3" :aria-label="type">
                    <svg
                        v-if="type === 'information'"
                        class="align-middle w-6 h-6 text-blue-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <title>Information</title>
                        <rect
                            x="22.5"
                            y="18"
                            width="3"
                            height="17"
                            rx="1.5"
                            ry="1.5"
                        />
                        <path
                            d="M24,16h0a1.5,1.5,0,0,0,0-3h0a1.5,1.5,0,0,0,0,3Z"
                        />
                        <path
                            d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,37A17,17,0,1,1,41,24,17,17,0,0,1,24,41Z"
                        />
                    </svg>

                    <svg
                        v-if="type === 'error'"
                        class="align-middle w-6 h-6 text-red-1 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <title>Error</title>
                        <g id="Error">
                            <rect
                                x="22.5"
                                y="13"
                                width="3"
                                height="17"
                                rx="1.5"
                                ry="1.5"
                                transform="translate(48 43) rotate(-180)"
                            />
                            <rect
                                x="22.5"
                                y="32"
                                width="3"
                                height="3"
                                rx="1.5"
                                ry="1.5"
                                transform="translate(48 67) rotate(-180)"
                            />
                            <path
                                d="M44,16.78a1.46,1.46,0,0,0-.17-1,1.49,1.49,0,0,0-.19-.29l0-.05-11-11a1.5,1.5,0,0,0-.49-.33h0A1.49,1.49,0,0,0,31.5,4h-15a1.49,1.49,0,0,0-.55.11h0a1.5,1.5,0,0,0-.49.33l-11,11h0l0,0,0,0a1.49,1.49,0,0,0-.2.3,1.46,1.46,0,0,0-.16,1V31.26a1.47,1.47,0,0,0,.39,1.3l11,11a1.47,1.47,0,0,0,1.29.39H31.27a1.47,1.47,0,0,0,1.29-.39l11-11a1.47,1.47,0,0,0,.39-1.3ZM30.92,41H17.08L7,30.92V17.12L17.12,7H30.88L41,17.12v13.8Z"
                            />
                        </g>
                    </svg>

                    <svg
                        v-if="type === 'success'"
                        class="align-middle w-6 h-6 text-green-1 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <title>Success</title>
                        <g id="Sucess">
                            <path
                                d="M33.91,18.66a1.5,1.5,0,0,0-2.12,0l-11,11L16.23,25a1.5,1.5,0,1,0-2.12,2.12l5.65,5.65h0a1.5,1.5,0,0,0,2.12,0h0l12-12A1.5,1.5,0,0,0,33.91,18.66Z"
                            />
                            <path
                                d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,37A17,17,0,1,1,41,24,17,17,0,0,1,24,41Z"
                            />
                        </g>
                    </svg>

                    <svg
                        v-if="type === 'warning'"
                        class="align-middle w-6 h-6 text-yellow-1 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <title>Warning</title>
                        <g id="Warning">
                            <path
                                d="M45.79,41.26l.08-.14,0-.12a1.5,1.5,0,0,0,0-.16s0-.08,0-.12a1.49,1.49,0,0,0,0-.18s0,0,0,0,0,0,0-.07a1.48,1.48,0,0,0,0-.18s0-.08,0-.13a1.49,1.49,0,0,0,0-.15l-.06-.14,0-.08L25.3,4.24l-.05-.07L25.16,4l-.1-.11L25,3.84l-.14-.1-.07,0,0,0-.15-.07-.13,0-.14,0-.14,0h-.29l-.14,0-.14,0-.13,0-.15.07,0,0-.07,0-.14.1-.1.09-.1.11-.09.12-.05.07L2.2,39.75l0,.07L2.1,40l0,.13a1.26,1.26,0,0,0,0,.3s0,.06,0,.09,0,0,0,.05a1.48,1.48,0,0,0,0,.16s0,.1,0,.14,0,.09,0,.13a1.49,1.49,0,0,0,.05.14l.07.12.08.13.09.11.1.11.11.09.13.09,0,0,.08,0L3,41.9l.14,0,.14,0,.17,0H44.58l.17,0,.13,0,.15,0,.14-.06.08,0,0,0,.12-.09.12-.1.09-.09.1-.13ZM24,8,41.9,39H6.1Z"
                            ></path>
                            <g id="Info">
                                <rect
                                    x="22.5"
                                    y="16"
                                    width="3"
                                    height="15"
                                    rx="1.5"
                                    ry="1.5"
                                    transform="translate(48 47) rotate(180)"
                                ></rect>
                                <rect
                                    x="22.5"
                                    y="33"
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                    ry="1.5"
                                    transform="translate(48 69) rotate(-180)"
                                ></rect>
                            </g>
                        </g>
                    </svg>
                </div>

                <p class="m-0 flex-auto overflow-hidden">
                    <slot />
                </p>

                <ui-button
                    tone="tertiary"
                    class="top-0 right-0 absolute px-2 opacity-0 group-hover:opacity-100 focus:outline-none active:outline-none hover:outline-none"
                    @click="close"
                >
                    <span class="w-6 h-6" aria-hidden="true">
                        <svg
                            class="align-middle w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M26.12 24l10.61-10.61a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0L24 21.88 13.39 11.27a1.5 1.5 0 1 0-2.12 2.12L21.88 24 11.27 34.61a1.5 1.5 0 1 0 2.12 2.12L24 26.12l10.61 10.61a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12z"
                            ></path>
                        </svg>
                    </span>
                </ui-button>
            </div>
        </transition>
    </div>
</template>

<script>
import UiButton from './ui-button.vue';

export default {
    components: {
        UiButton,
    },
    props: {
        type: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
        show: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        borderColorClass() {
            return {
                information: 'border-blue-2',
                error: 'border-red-1',
                success: 'border-green-1',
                warning: 'border-yellow-1',
            }[this.type];
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>
