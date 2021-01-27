import UiModal from '@/components/ui-modal.vue';
import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Informational/Modal',
    component: UiModal,
    argTypes: {
        showCloseIcon: {
            defaultValue: true,
            description:
                'Boolean indicating whether the close icon in the modal should render',
            control: {
                options: [true, false],
            },
        },
        showBackdrop: {
            defaultValue: true,
            description:
                'Boolean indicating whether the close icon in the modal should render',
            control: {
                options: [true, false],
            },
        },
        customModalContainerClass: {
            defaultValue: '',
            description:
                'Property to overwrite the default classes of the modal container',
            control: {
                type: 'text',
            },
        },
        customModalClass: {
            defaultValue: '',
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
    components: { UiButton, UiModal },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
    template: `<div>
    <ui-button tone="primary" @click="showModal">Open modal</ui-button>
    <ui-modal v-show="isModalVisible" @close="closeModal" :showCloseIcon="showCloseIcon" :showBackdrop="showBackdrop">
          <template v-slot:header></template>
        </ui-modal></div>`,
});

export const Modal = Template.bind({});
