import UiNotification from '@/components/ui-notification.vue';
import UiIcon from '@/components/ui-icon.vue';

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
        rounded: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiNotification, UiIcon },
    template: `<ui-notification :type="type" :rounded="rounded">
            <template v-slot:notificationBody>
                <p class="m-0 flex-auto">    
                    Lorem ipsum dolor, sit amet. Nunc nec ante vel mi henderdit.
                </p>

                <button
                    type="button"
                    class="leading-6 rounded-sm inline-flex text-center items-center justify-center align-middle cursor-pointer whitespace-no-wrap ml-3 bg-transparent border-none p-0 h-auto border-0 text-dark-2"
                    aria-label="Close"
                >
                    <span aria-hidden="true">
                        <ui-icon icon="close"></ui-icon>
                    </span>
                </button>
            </template>

        </ui-notification>`,
});

export const Notification = Template.bind({});
Notification.args = {
    type: 'success',
};
