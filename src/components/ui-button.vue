<template>
    <button class="fd-btn" :class="button.type" @click="handleClick">
        {{ button.label }}
    </button>
</template>

<script>
  export default {
    name: 'ui-button',
    props: {
      button: {
        type: Object,
        required: true,
        default: () => ({
            label: {
                type: String,
                required: true
            },
            type: {
                type: String,
            }
        }),
      },
    },
    methods: {
        handleClick(e) {
            this.$emit('handleClick', e);
        }
    }
  };
</script>

<style lang="scss" scoped>
button {
    line-height: 1.5;
    display: inline-flex;
    padding: 0 1.5em;
    height: 2.75em;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2px;
    transition: background .25s cubic-bezier(.23,1,.32,1),box-shadow .25s cubic-bezier(.23,1,.32,1);
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
    background-color: #f7a100;
    color: #fff;
    box-shadow: 0 1px 0 rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);

    &:hover,
    &:focus,
    &:active {
        background-color: #de9000;
        color: #fff;
    }

    &:active {
        box-shadow: 0 0 0 rgba(0,0,0,.1), inset 0 1px 0 rgba(0,0,0,.1);
    }
}
</style>
