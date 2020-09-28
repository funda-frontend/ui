<template>
    <div
        :class="cssClasses"
        class="ui-items-baseline ui-flex ui-rounded-sm ui-p-3"
    >
        <span class="ui-mr-3" :aria-label="tone">
            <svg
                v-if="tone === 'information'"
                class="ui-align-middle ui-w-6 ui-h-6 ui-color-dark-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
            >
                <rect x="22.5" y="18" width="3" height="17" rx="1.5" ry="1.5" />
                <path d="M24,16h0a1.5,1.5,0,0,0,0-3h0a1.5,1.5,0,0,0,0,3Z" />
                <path
                    d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,37A17,17,0,1,1,41,24,17,17,0,0,1,24,41Z"
                />
            </svg>

            <svg
                v-if="tone === 'warning'"
                class="ui-align-middle ui-w-6 ui-h-6 ui-color-yellow-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
            >
                <title>warning.colors-yellow-blue</title>
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
        </span>

        <p class="ui-m-0 ui-flex-auto">
            <slot />
        </p>

        <!-- <button type="button" class="fd-notification__close fd-m-left-s fd-btn" aria-label="Close">
            <span aria-hidden="true">
                <svg class="fd-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M26.12 24l10.61-10.61a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0L24 21.88 13.39 11.27a1.5 1.5 0 1 0-2.12 2.12L21.88 24 11.27 34.61a1.5 1.5 0 1 0 2.12 2.12L24 26.12l10.61 10.61a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12z"></path>
                </svg>
            </span>
        </button> -->
    </div>
</template>

<script>
export default {
    props: {
        tone: {
            type: String,
            default: 'information',
            validator: (value) =>
                ['information', 'error', 'success', 'warning'].includes(value),
        },
    },
    computed: {
        cssClasses() {
            return {
                information: 'ui-bg-white',
                error: 'ui-bg-red-2',
                success: 'ui-bg-green-2',
                warning: 'ui-bg-yellow-2',
            }[this.tone];
        },
    },
};
</script>
