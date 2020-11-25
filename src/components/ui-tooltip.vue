<template>
    <div>
        <popper
            :key="popperKey"
            :trigger="trigger"
            :options="{ placement: side }"
        >
            <div
                role="tooltip"
                :class="backgroundClass"
                class="popper p-3 max-w-sm rounded-sm z-50 absolute w-auto inline-block"
            >
                <slot name="content" />
            </div>

            <button slot="reference">
                <slot name="reference" />
            </button>
        </popper>
    </div>
</template>

<script>
import Popper from 'vue-popperjs';
import './../styles/vendors/popper.css';

export default {
    components: {
        Popper,
    },
    props: {
        background: {
            type: String,
            default: 'white',
            validator: (value) => ['white', 'blue', 'light'].includes(value),
        },
        trigger: {
            type: String,
            default: 'hover',
            validator: (value) =>
                ['hover', 'clickToOpen', 'clickToToggle', 'focus'].includes(
                    value
                ),
        },
        side: {
            type: String,
            default: 'bottom',
            validator: (value) =>
                ['top', 'right', 'bottom', 'left'].includes(value),
        },
    },
    computed: {
        popperKey() {
            return `${this.side}-${this.trigger}`;
        },
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
