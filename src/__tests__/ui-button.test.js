import UiButton from '@/components/ui-button.vue';
import { shallowMount } from '@vue/test-utils';

const ATTR_BTN = '[data-test-button]';

describe('UiButton', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiButton);
    });

    it('Should render anchor element when href is set', async () => {
        const anchor = wrapper.find('a');
        wrapper.setProps({
            href: '#',
        });
        await wrapper.vm.$nextTick();
        expect(anchor.exists()).toBe(true);
    });

    it('Should have tone classes when tone is set', async () => {
        const button = wrapper.find(ATTR_BTN);
        wrapper.setProps({
            tone: 'primary',
        });
        await wrapper.vm.$nextTick();
        expect(button.classes()).toContain('bg-orange-2');
    });

    it('Should disable button when disable property is set', async () => {
        const button = wrapper.find(ATTR_BTN);
        wrapper.setProps({
            tone: 'secondary',
            disabled: true,
        });
        await wrapper.vm.$nextTick();
        expect(button.classes()).toContain('cursor-not-allowed');
    });
});
