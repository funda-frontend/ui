import UiButton from '@/components/ui-button.vue';
import { shallowMount } from '@vue/test-utils';

const ATTR_BTN = '[data-test-button]';

describe('UiButton', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiButton, {
            propsData: {},
        });
    });

    it('Should have tone classes when tone is set', async () => {
        const button = wrapper.find(ATTR_BTN);
        wrapper.setProps({
            tone: 'primary',
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.tone).toBe('primary');
        expect(button.classes()).toContain('bg-orange-2');
    });
});
