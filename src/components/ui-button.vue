<template>
    <button class="fd-btn" :class="button.type" @click="handleClick">
        <a v-if="button.url" :href="button.url" target="_blank" :title="button.label" rel="noopener">{{ button.label }}</a>
        <span v-else-if="button.label">{{ button.label }}</span>
        <slot v-else/>
    </button>
</template>

<script>
  export default {
    name: 'ui-button',
    props: {
      button: {
        type: Object,
        default: () => ({
            url: {
                type: String,
            },
            label: {
                type: String,
            },
            type: {
                type: String,
            }
        }),
      },
    },
    methods: {
        handleClick(e) {
            this.$emit('handleClick');
        }
    }
  };
</script>

<style lang="scss" scoped>
$color-orange-2: #f7a100;
$color-white: #FFFFFF;
$default-radius: 2px;
$default-transition: .25s cubic-bezier(.23,1,.32,1);

button {
    line-height: 1.5;
    display: inline-flex;
    padding: 0 1.5em;
    height: 2.75em;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: $default-radius;
    transition: background $default-transition, box-shadow $default-transition;
    touch-action: manipulation;
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify-content: center;

    &[disabled],
    &[disabled]:hover {
        background-color: #ccc;
        border-color: transparent;
        color: #ededed;
        cursor: not-allowed;
    }
}

.btn--primary {
    background-color: $color-orange-2;
    color: #fff;
    box-shadow: 0 1px 0 rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);

    &:hover,
    &:focus,
    &:active {
        background-color: #de9000;
        color: $color-white;
    }

    &:active {
        box-shadow: 0 0 0 rgba(0,0,0,.1), inset 0 1px 0 rgba(0,0,0,.1);
    }
}
</style>
