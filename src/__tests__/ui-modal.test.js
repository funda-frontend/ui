import UiModal from '@/components/ui-modal.vue';
import { shallowMount } from '@vue/test-utils';

const BUTTON_SELECTOR = 'button';
const ATTR_MODAL_CONTAINER = '[data-test-modal-container]';
const ATTR_MODAL = '[data-test-modal]';
const CLASSNAMES_MODAL_CONTAINER_CUSTOM =
    'fixed inset-0 flex items-center justify-center z-60 transition duration-600 ease-in-out';
const CLASSNAMES_MODAL = 'w-full h-full';
const CLASSNAMES_MODAL_CUSTOM =
    'w-full h-full m-auto bg-blue-2 md:rounded shadow-xl transition duration-300 ease-in-out relative';
const EVENT_CLOSE = 'close';
const SLOT_TEMPLATE_HEADER = 'Modal header';
const SLOT_TEMPLATE_BODY =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
const SLOT_TEMPLATE_FOOTER = 'footer';

describe('UiModal', () => {
    let vm;
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiModal, {
            propsData: {
                showCloseIcon: false,
                wideMode: true,
                customModalContainerClasses: CLASSNAMES_MODAL_CONTAINER_CUSTOM,
                customModalClasses: CLASSNAMES_MODAL_CUSTOM,
            },
            slots: {
                header: SLOT_TEMPLATE_HEADER,
                body: SLOT_TEMPLATE_BODY,
                footer: SLOT_TEMPLATE_FOOTER,
            },
        });
        vm = wrapper.vm;
    });

    describe('close icon is hidden when showCloseIcon equals false', () => {
        it('prop showCloseIcon', () => {
            expect(wrapper.find(BUTTON_SELECTOR).exists()).toBe(false);
        });

        it('show text if close button text is passed as prop', async () => {
            wrapper.setProps({ closeButtonText: 'close' });
            wrapper.setProps({ showCloseIcon: true });
            await wrapper.vm.$nextTick();
            expect(wrapper.find(BUTTON_SELECTOR).text()).toBe('close');
        });
    });

    describe('modal is fullscreen when wideMode prop equals true', () => {
        it('prop wideMode', () => {
            expect(wrapper.find(ATTR_MODAL).attributes().class).toContain(
                CLASSNAMES_MODAL
            );
        });
    });
    describe('modal style is updated when custom classes are set', () => {
        it('prop customModalContainerClasses', () => {
            expect(
                wrapper.find(ATTR_MODAL_CONTAINER).attributes().class
            ).toContain(CLASSNAMES_MODAL_CONTAINER_CUSTOM);
        });

        it('prop customModalClasses', () => {
            expect(wrapper.find(ATTR_MODAL).attributes().class).toContain(
                CLASSNAMES_MODAL_CUSTOM
            );
        });
    });

    describe('close event is triggered when button is clicked so that parent close modal', () => {
        it('event close', () => {
            vm.$emit = jest.fn();
            vm.close();
            expect(vm.$emit).toHaveBeenCalledWith(EVENT_CLOSE);
        });
    });

    describe('markup has changed when scope slots are set', () => {
        it('slot header', () => {
            expect(wrapper.find('header').text()).toContain(
                SLOT_TEMPLATE_HEADER
            );
        });

        it('slot body', () => {
            expect(wrapper.find('section').text()).toContain(
                SLOT_TEMPLATE_BODY
            );
        });

        it('slot footer', () => {
            expect(wrapper.find('footer').text()).toContain(
                SLOT_TEMPLATE_FOOTER
            );
        });
    });
});
