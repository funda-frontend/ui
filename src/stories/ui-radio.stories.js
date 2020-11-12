import UiRadio from '@/components/ui-radio.vue';

export default {
    title: 'Forms/Radio',
    component: UiRadio,
    argTypes: {
        disabled: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiRadio },
    template:
        '<ui-radio :selected="selected" :items="items" :disabled="disabled" />',
});

export const Input = Template.bind({});
Input.args = {
    items: [
        {
            label: 'Option 1',
            value: 'option1',
        },
        {
            label: 'Option 2',
            value: 'option2',
        },
        {
            label: 'Option 3',
            value: 'option3',
        },
    ],
    selected: 'option1',
    disabled: false,
};
