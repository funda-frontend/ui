import UiRadio from '@/components/ui-radio.vue';

export default {
    title: 'Forms/Radio',
    component: UiRadio,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['Option 1', 'Option 2', 'Option 3'],
            },
        },
        selected: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiRadio },
    template: '<ui-radio :selected="selected" :items="items" />',
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
};
