<template>
    <button class="fd-btn" @click="handleClick">
        {{ button.label }}
    </button>
</template>

<style lang="scss" scoped>
button {
    font-size: inherit;
}
</style>

<script>
  export default {
    name: 'ui-button',
    props: {
      button: {
        type: Object,
        required: true,
        default: () => ({}),
      },
    },
    methods: {
        handleClick(e) {
            this.$emit('handleClick', e);
        }
    }
  };
</script>
