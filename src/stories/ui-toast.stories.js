import UiToast from '@/components/ui-toast.vue';

export default {
    title: 'Visual/Toasts/Toast',
    component: UiToast,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiToast },
    template:
        '<ui-toast :type="type">Toast lorem ipsum sitamet doloris.</ui-toast>',
});

export const Toast = Template.bind({});
Toast.args = {
    type: 'information',
};
