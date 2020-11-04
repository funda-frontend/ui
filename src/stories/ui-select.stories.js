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
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiSelect },
    template:
        '<ui-select @change="change" data-renan :options="options" :selected="selected">Select</ui-select>',
});

export const Select = Template.bind({});
Select.args = {
    selected,
    options,
    change() {},
};
