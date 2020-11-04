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
        '<ui-input @change="onChange" :type="type" :isValid="isValid" :value="value" :placeHolder="placeHolder" :validationMessage="validationMessage" >lorem ipsum sitamet doloris.</ui-input>',
});

export const Input = Template.bind({});
Input.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeHolder: 'PlaceHolder',
    validationMessage: 'Ooops',
    onChange() {},
};
