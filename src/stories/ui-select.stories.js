import UiSelect from '@/components/ui-select.vue';

const selected = 1;
const options = [
    {
        text: 'Select',
        value: 0,
    },
    {
        text: 'Option A',
        value: 1,
    },
    {
        text: 'Option B',
        value: 2,
    },
    {
        text: 'Option C',
        value: 3,
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
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiSelect },
    template:
        '<ui-select @change="onChange" :options="options" :selected="selected" :isValid="isValid">Select</ui-select>',
});

export const Select = Template.bind({});
Select.args = {
    selected,
    options,
    onChange() {},
    isValid: true,
};
