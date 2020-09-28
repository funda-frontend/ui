import UiNotification from '@/components/ui-notification.vue';

export default {
    title: 'Informational',
    component: UiNotification,
    argTypes: {
        tone: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiNotification },
    template:
        '<ui-notification :tone="tone">Lorem ipsum dolor, sit amet. Nunc nec ante vel mi henderdit.</ui-notification>',
});

export const Notification = Template.bind({});
Notification.args = {
    tone: 'information',
};
