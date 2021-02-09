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
        customModalContainerClasses: {
            defaultValue:
                'fixed inset-0 flex items-center justify-center z-50 transition duration-500 ease-in-out md:p-9',
            description:
                'Property to overwrite the default classes of the modal container',
            control: {
                type: 'text',
            },
        },
        customModalClasses: {
            defaultValue:
                'w-full h-full m-auto bg-white md:rounded shadow-xl transition duration-300 ease-in-out relative overflow-hidden flex flex-col',
            description:
                'Property to overwrite default classes allowing you to customize the modal',
            control: {
                type: 'text',
            },
        },
        wideMode: {
            defaultValue: false,
            description:
                'Boolean indicating whether the close icon in the modal should render',
            control: {
                options: [true, false],
            },
        },
        disableScroll: {
            defaultValue: false,
            description:
                'Boolean indicating whether the scroll in the modal should be shown',
            control: {
                options: [true, false],
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
    <ui-modal v-show="isModalVisible" @close="closeModal" :showCloseIcon="showCloseIcon" :customModalContainerClasses="customModalContainerClasses" :customModalClasses="customModalClasses" :wideMode="wideMode" :disableScroll="disableScroll">
          <template v-slot:header>Modal header</template>
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
    <ui-modal v-show="isModalVisible" @close="closeModal" :showCloseIcon="showCloseIcon" :customModalContainerClasses="customModalContainerClasses" :customModalClasses="customModalClasses" :wideMode="wideMode" :disableScroll="disableScroll">
        <template v-slot:header>Modal header</template>
        <template v-slot:body>
            <ui-notification type="success" :rounded="false">
                <template v-slot:notificationBody>
                    <p class="m-0 flex-auto">    
                        Notification on modal 
                    </p>
                </template>
            </ui-notification>
            <div class="m-5">
                <p>STARTFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn aroundEND</p>
            </div>
        </template>
        <template v-slot:footer>
            <ui-button tone="primary" @click="closeModal" class="mr-4">Button</ui-button>
            <ui-button tone="tertiary" @click="closeModal">Button</ui-button>
        </template>
        </ui-modal></div>`,
});

export const ModalExtended = TemplateModalWithContent.bind({});
