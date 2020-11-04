<template>
    <div class="ui-relative ui-container">
        <ui-label v-if="prefixText"> {{ prefixText }} </ui-label>
        <input
            :value="value"
            :type="type"
            :class="isValid !== true ? 'ui-border-red-1' : 'ui-border-light-1'"
            class="ui-container ui-rounded-sm ui-rounded-sm ui-border ui-bg-white ui-shadow-sm ui-p-2 ui-pl-4 ui-outline-none ui-text-base ui-font-normal"
            :placeholder="placeHolder"
            v-bind="$attrs"
            v-on="$listeners"
        />
        <ui-label v-if="sufixText && isValid" class="ui-text-dark-2 ui-text-xs">
            {{ sufixText }}
        </ui-label>
        <ui-error-message v-if="!isValid" :message="validationMessage" />
    </div>
</template>

<script>
import UiErrorMessage from '@/components/ui-error-message.vue';
import UiLabel from '@/components/ui-label.vue';

export default {
    components: {
        UiErrorMessage,
        UiLabel,
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
        prefixText: {
            type: String,
        },
        sufixText: {
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
