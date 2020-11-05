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
                <p class="m-0 flex-auto">    
                    Lorem ipsum dolor, sit amet. Nunc nec ante vel mi henderdit.
                </p>

                <button
                    type="button"
                    class="leading-6 rounded-sm px-6 h-11 inline-flex text-center items-center justify-center align-middle cursor-pointer whitespace-no-wrap ml-3 bg-transparent border-none p-0 h-auto border-0 text-dark-2"
                    aria-label="Close"
                >
                    <span aria-hidden="true">
                        <svg
                            class="align-middle w-6 h-6"
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
