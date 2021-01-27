import UiModal from '@/components/ui-modal.vue';
import UiButton from '@/components/ui-button.vue';
import UiNotification from '@/components/ui-notification.vue';

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

export const ModalDefault = Template.bind({});

const TemplateModalWithContent = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiButton, UiModal, UiNotification },
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
          <template v-slot:header>
            <h2 class="m-0 font-semibold text-2xl">Title</h2>
          </template>
          <template v-slot:body>
          <ui-notification type="success" :rounded="false">
            <template v-slot:notificationBody>
                <p class="m-0 flex-auto">    
                    Lorem ipsum dolor, sit amet. Nunc nec ante vel mi henderdit.
                </p>
            </template>
            </ui-notification>
          <section class="m-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          </template>
          <template v-slot:footer>
            <footer class="m-5">
                <ui-button tone="primary" @click="closeModal" class="mr-4">Button</ui-button>
                <ui-button tone="tertiary" @click="closeModal">Button</ui-button>
            </footer>
          </template>
        </ui-modal></div>`,
});

export const ModalExtended = TemplateModalWithContent.bind({});
