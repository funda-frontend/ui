import UiCheckbox from '@/components/ui-checkbox.vue';

export default {
    title: 'Forms/Checkbox',
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
        '<ui-checkbox :id="id" :disabled="disabled" :checked="checked"> Option 1 </ui-checkbox>',
});

export const Input = Template.bind({});
Input.args = {
    id: 'checkbox-id-1',
    name: 'checkbox-name',
    checked: false,
    disabled: false,
};
