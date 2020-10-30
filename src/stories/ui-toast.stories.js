import UiToast from '@/components/ui-toast.vue';

export default {
    title: 'Informational/Toast',
    component: UiToast,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
        animation: {
            control: {
                type: 'select',
                options: ['none', 'animation--fade-right'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiToast },
    template:
        '<ui-toast :type="type" :animation="animation">Toast lorem ipsum sitamet doloris.</ui-toast>',
});

export const Toast = Template.bind({});
Toast.args = {
    type: 'information',
    animation: 'none',
};
