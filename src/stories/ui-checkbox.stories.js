import UiCheckbox from '@/components/ui-checkbox.vue';

export default {
    title: 'Forms/CheckBox',
    component: UiCheckbox,
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
    components: { UiCheckbox },
    template:
        '<ui-checkbox :selected="selected" :items="items" @change="onChange" :disabled="disabled" />',
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
        {
            label: 'Option 4',
            value: 'option4',
        },
    ],
    selected: 'option1',
    disabled: false,
    onChange() {},
};
