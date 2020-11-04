<template>
    <div class="ui-container">
        <input
            :type="type"
            :value="value"
            :class="isValid !== true ? 'ui-border-red-1' : 'ui-border-light-1'"
            class="ui-container ui-rounded-sm ui-rounded-sm ui-border ui-bg-white ui-shadow-sm ui-p-2 ui-pl-4 ui-outline-none ui-text-base ui-font-normal"
            :placeholder="placeHolder"
            v-bind="$attrs"
            v-on="$listeners"
        />
        <ui-error-message v-if="!isValid" :message="validationMessage" />
    </div>
</template>

<script>
import UiErrorMessage from '@/components/ui-error-message.vue';

export default {
    components: {
        UiErrorMessage,
    },
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: 'text',
            validator: (value) => ['text', 'number'].includes(value),
        },
        value: {
            type: String,
        },
        placeHolder: {
            type: String,
        },
        isValid: {
            type: Boolean,
            default: true,
        },
        validationMessage: {
            type: String,
        },
    },
};
</script>
