import UiRadioGroup from '@/components/ui-radio-group.vue';

export default {
    title: 'Forms/Radio',
    component: UiRadioGroup,
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
    components: { UiRadioGroup },
    template:
        '<ui-radio-group :selected="selected" :items="items" @change="onChange" :disabled="disabled" id="radio-group-id" />',
});

export const RadioGroup = Template.bind({});
RadioGroup.args = {
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
    onChange() {},
};
