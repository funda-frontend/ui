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
        '<ui-checkbox-group :selected="selected" :items="items" id="checkbox-group-id" @change="onChange" :disabled="disabled"/>',
});

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {
    items: [
        {
            label: 'Option 1',
            value: 'option1',
            selected: true,
        },
        {
            label: 'Option 2',
            value: 'option2',
            selected: false,
        },
        {
            label: 'Option 3',
            value: 'option3',
            selected: false,
        },
        {
            label: 'Option 4',
            value: 'option4',
            selected: true,
        },
    ],
    disabled: false,
    onChange(e) {
        console.log('e:', e);
    },
};
