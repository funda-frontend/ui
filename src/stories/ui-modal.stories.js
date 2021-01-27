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

export const ModalDefault = Template.bind({});

const TemplateModalWithContent = (args, { argTypes }) => ({
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
          <template v-slot:header><h2>Omschrijving wijzigen</h2></template>
          <template v-slot:body>
          <section class="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Risus in hendrerit gravida rutrum. Aliquam sem et tortor consequat. 
            Ut venenatis tellus in metus vulputate. Ac felis donec et odio pellentesque diam. 
            Ac tincidunt vitae semper quis lectus nulla. Lobortis elementum nibh tellus molestie nunc non blandit. 
            Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Donec ac odio tempor orci dapibus. 
            Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Porttitor massa id neque aliquam vestibulum morbi blandit cursus.
          </section>
          </template>
          <template v-slot:footer>
            <footer>
                <ui-button tone="primary" @click="closeModal">Opslaan</ui-button>
            </footer>
          </template>
        </ui-modal></div>`,
});

export const ModalExtended = TemplateModalWithContent.bind({});
