<template>
    <div class="fd-form-control__input">
        <input
            :id="id"
            v-model.lazy="imodel"
            class="fd-input"
            :type="type"
            :name="name"
            :maxlength="maxlength"
            :disabled="disabled"
            @input="$emit('update:model', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            required: true,
        },
        maxlength: {
            type: String,
            default: '',
        },
        model: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
        },
    },
    data: function() {
        return { imodel: this.model };
    },
};
</script>
