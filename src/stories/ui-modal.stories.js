import UiModal from '@/components/ui-modal.vue';
import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Informational/Modal',
    component: UiModal,
    argTypes: {
        closeIcon: {
            defaultValue: true,
            description:
                'Boolean indicating whether the close icon in the modal should render',
            control: {
                options: [true, false],
            },
        },
        customModalClass: {
            defaultValue: 'p-20',
            description:
                'Property to overwrite default classes allowing you to customize the modal',
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    data: () => ({
        open2: false,
    }),
    components: { UiButton, UiModal },
    template: `<div>
    <ui-button tone="primary" @click="open = true">Open modal</ui-button>
    <ui-modal :open="open" @close="open = false" :closeIcon="closeIcon" :customModalClass="customModalClass">
          <template v-slot:header></template>
        </ui-modal></div>`,
});

export const Modal = Template.bind({});
