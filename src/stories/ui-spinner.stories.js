import UiSpinner from '@/components/ui-spinner.vue';

export default {
    title: 'Visual/Spinner',
    component: UiSpinner,
    argTypes: {
        show: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiSpinner },
    template: '<ui-spinner :show="show"></ui-spinner>',
});

export const Spinner = Template.bind({});

Spinner.args = {
    show: true,
};
