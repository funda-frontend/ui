import UiTextarea from '@/components/ui-textarea.vue';

export default {
    title: 'Forms/Textarea',
    component: UiTextarea,
    argTypes: {
        isValid: {
            control: {
                options: [true, false],
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
        disabled: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiTextarea },
    template:
        '<ui-textarea :value="value" :isValid="isValid" @change="onChange" :disabled="disabled" :placeholder="placeholder"/>',
});

export const Textarea = Template.bind({});

Textarea.args = {
    onChange() {},
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeholder: 'placeholder text',
    disabled: false,
};
