import UiRadioGroup from '@/components/ui-radio-group.vue';

export default {
    title: 'Forms/Radio/Radio group',
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
        '<ui-radio-group :selected="selected" :items="items" :disabled="disabled" id="radio-group-id" @change="onChange" />',
});

export const RadioGroup = Template.bind({});
RadioGroup.args = {
    items: [
        {
            label: 'Item 1',
            value: 'item1',
        },
        {
            label: 'Item 2',
            value: 'item2',
        },
        {
            label: 'Item 3',
            value: 2,
        },
        {
            label: 'Item 4',
            value: true,
        },
        {
            label: 'Item 5',
            value: false,
        },
    ],
    selected: 'item2',
    disabled: false,
    onChange() {},
};
