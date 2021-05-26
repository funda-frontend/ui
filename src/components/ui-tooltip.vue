<template>
    <div>
        <popper :trigger="trigger" :options="options">
            <div
                role="tooltip"
                :class="backgroundClass"
                class="popper p-3 max-w-sm rounded-sm z-50 absolute w-auto inline-block"
            >
                <slot name="content" />
            </div>

            <button slot="reference" class="focus:outline-none">
                <slot name="reference" />
            </button>
        </popper>
    </div>
</template>

<script>
import Popper from 'vue-popperjs';
import './../styles/components/popper.css';

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
        options: {
            type: Object,
            default: () => {},
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
