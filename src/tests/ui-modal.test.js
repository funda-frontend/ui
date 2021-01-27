import UiModal from '@/components/ui-modal.vue';
import { shallowMount } from '@vue/test-utils';

const BUTTON_SELECTOR = 'button';
const ATTR_MODAL_CONTAINER = '[data-test-modal-container]';
const ATTR_MODAL = '[data-test-modal]';
const CLASSNAMES_MODAL_CONTAINER_CUSTOM =
    'fixed inset-0 flex items-center justify-center z-60 modal-container transition duration-600 ease-in-out';
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

    it('close icon is hidden when showCloseIcon equals false', () => {
        expect(wrapper.find(BUTTON_SELECTOR).exists()).toBe(false);
    });

    it('when wide mode is true the modal contains fullscreen mode classes', () => {
        expect(wrapper.find(ATTR_MODAL).attributes().class).toContain(
            CLASSNAMES_MODAL
        );
    });

    it('classes are updated when custom modal class is set', () => {
        expect(wrapper.find(ATTR_MODAL).attributes().class).toContain(
            CLASSNAMES_MODAL_CUSTOM
        );
    });

    it('classes are updated when custom modal container class is set', () => {
        expect(wrapper.find(ATTR_MODAL_CONTAINER).attributes().class).toContain(
            CLASSNAMES_MODAL_CONTAINER_CUSTOM
        );
    });

    it('emits close when close method is triggered by click event', () => {
        vm.$emit = jest.fn();
        vm.close();
        expect(vm.$emit).toHaveBeenCalledWith(EVENT_CLOSE);
    });

    it('if header slot scope is set the DOM is updated', () => {
        expect(wrapper.find('header').text()).toContain(SLOT_TEMPLATE_HEADER);
    });

    it('if body slot scope is set the DOM is updated', () => {
        expect(wrapper.find('section').text()).toContain(SLOT_TEMPLATE_BODY);
    });

    it('if footer slot scope is set the DOM is updated', () => {
        expect(wrapper.find('footer').text()).toContain(SLOT_TEMPLATE_FOOTER);
    });
});
