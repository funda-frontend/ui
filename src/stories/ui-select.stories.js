import UiSelect from '@/components/ui-select.vue';

const selected = 'test';
const options = [
    {
        text: 'Select',
        value: 0,
    },
    {
        text: 'Option A',
        value: 'test',
    },
    {
        text: 'Option B',
        value: 2,
    },
    {
        text: 'Option C',
        value: 'test2',
    },
];

export default {
    title: 'Forms/Select',
    component: UiSelect,
    argTypes: {
        isValid: {
            control: {
                options: [true, false],
            },
        },
        disabled: {
            control: {
                options: [true, false],
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
    components: { UiSelect },
    template:
        '<ui-select @change="onChange" :options="options" :selected="selected" :isValid="isValid" :disabled="disabled">Select</ui-select>',
});

export const Select = Template.bind({});
Select.args = {
    selected,
    options,
    onChange() {},
    isValid: true,
    disabled: false,
};
