import UiErrorMessage from '@/components/ui-error-message.vue';

export default {
    title: 'Forms/Error Message',
    component: UiErrorMessage,
    argTypes: {
        message: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiErrorMessage },
    template: '<ui-error-message :message="message"/>',
});

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    message: 'Ooopps..',
};
