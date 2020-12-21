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
        '<ui-radio id="uniqueidname" :items="items" :selected="selectedOption" :disabled="disabled"  @change:value="onChange"/>',
});

export const Input = Template.bind({});
Input.args = {
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
            value: 'item3',
        },
        {
            label: 'Item 4',
            value: false,
        },
        {
            label: 'Item 5',
            value: true,
        },
    ],
    selectedOption: 'item2',
    disabled: false,
    onChange() {},
};
