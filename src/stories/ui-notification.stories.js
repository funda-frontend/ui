import UiNotification from '@/components/ui-notification.vue';

export default {
    title: 'Informational/Notification',
    component: UiNotification,
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
    components: { UiNotification },
    template: `<ui-notification :type="type">
            <template v-slot:notificationBody>
                <p class="ui-m-0 ui-flex-auto">    
                    Lorem ipsum dolor, sit amet. Nunc nec ante vel mi henderdit.
                </p>

                <button
                    type="button"
                    class="ui-leading-6 ui-rounded-sm ui-px-6 ui-h-11 ui-inline-flex ui-text-center ui-items-center ui-justify-centerui-align-middle ui-cursor-pointer ui-whitespace-no-wrap ui-ml-3 ui-bg-transparent ui-border-none ui-p-0 ui-h-auto ui-border-0 ui-text-dark-2"
                    aria-label="Close"
                >
                    <span aria-hidden="true">
                        <svg
                            class="ui-align-middle ui-w-6 ui-h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M26.12 24l10.61-10.61a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0L24 21.88 13.39 11.27a1.5 1.5 0 1 0-2.12 2.12L21.88 24 11.27 34.61a1.5 1.5 0 1 0 2.12 2.12L24 26.12l10.61 10.61a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12z"
                            ></path>
                        </svg>
                    </span>
                </button>
            </template>

        </ui-notification>`,
});

export const Notification = Template.bind({});
Notification.args = {
    type: 'information',
};
