<template>
    <div
        :class="cssClasses"
        class="ui-items-baseline ui-flex ui-rounded-sm ui-p-1"
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            ante vel mi hendrerit ultricies. Praesent ut ornare ante. Donec
            pulvinar rhoncus quam. Donec facilisis, sem vitae pulvinar
            condimentum, lectus magna mollis ex, vitae lobortis odio diam ut
            est.
        </p>
    </div>
    <!-- <span class="fd-notification__icon fd-m-right-s" aria-label="Information">
            <svg class="fd-icon fd-color-dark-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="22.5" y="18" width="3" height="17" rx="1.5" ry="1.5"/>
                <path d="M24,16h0a1.5,1.5,0,0,0,0-3h0a1.5,1.5,0,0,0,0,3Z"/><path d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,37A17,17,0,1,1,41,24,17,17,0,0,1,24,41Z"/>
            </svg>
        </span> -->

    <!-- <p class="fd-notification__body">
            <slot />
        </p> -->

    <!-- <button type="button" class="fd-notification__close fd-m-left-s fd-btn" aria-label="Close">
            <span aria-hidden="true">
                <svg class="fd-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M26.12 24l10.61-10.61a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0L24 21.88 13.39 11.27a1.5 1.5 0 1 0-2.12 2.12L21.88 24 11.27 34.61a1.5 1.5 0 1 0 2.12 2.12L24 26.12l10.61 10.61a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12z"></path>
                </svg>
            </span>
        </button> -->
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
