import UiCheckboxGroup from '@/components/ui-checkbox-group.vue';

export default {
    title: 'Forms/Checkbox',
    component: UiCheckboxGroup,
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
    components: { UiCheckboxGroup },
    template:
        '<ui-checkbox-group :selected="selected" :items="items" @change="onChange" :disabled="disabled"/>',
});

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {
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
    selected: 'option2',
    disabled: false,
    onChange() {},
};
