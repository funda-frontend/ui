import UiToaster from '@/components/ui-toaster.vue';
import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Visual/Toasts/Toaster',
    component: UiToaster,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['information', 'error', 'success', 'warning'],
            },
        },
    },
};

const Template = (args) => ({
    components: { UiToaster, UiButton },
    methods: {
        newToast() {
            this.$refs.toaster.showToast({
                type: args.type,
                title: 'New Toast 👋',
                text: `Hello, I'm a new toast ${Math.random()}`,
            });
        },
    },
    template: `
    <div>
        <ui-button @click="newToast">New Toast</ui-button>
        <ui-toaster ref="toaster" />
    </div>`,
});

export const Toaster = Template.bind({});
Toaster.args = {
    type: 'information',
};
