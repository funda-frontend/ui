import UiModal from '@/components/ui-modal.vue';
import { shallowMount } from '@vue/test-utils';

describe('UiModal', () => {
    let vm;
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiModal);
        vm = wrapper.vm;
    });

    describe('close', () => {
        it('emits close', () => {
            vm.$emit = jest.fn();
            vm.close();
            expect(vm.$emit).toHaveBeenCalledWith('close');
        });
    });
});
