import UiInput from '@/components/ui-input.vue';

export default {
    title: 'Forms/Input',
    component: UiInput,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['text', 'number'],
            },
        },
        isValid: {
            control: {
                options: [true, false],
            },
        },
        validationMessage: {
            control: {
                type: 'text',
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        placeHolder: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template:
        '<ui-input :prefixText="prefixText" :sufixText="sufixText" @change="onChange" :type="type" :isValid="isValid" placeHolder="placeHolder" :validationMessage="validationMessage" :value="value"/>',
});

export const Input = Template.bind({});
Input.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeHolder: 'PlaceHolder',
    validationMessage: 'Ooops',
    onChange() {},
    sufixText: 'Sufix text',
    prefixText: 'Prefix text',
};
