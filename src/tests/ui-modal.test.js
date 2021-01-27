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
});
