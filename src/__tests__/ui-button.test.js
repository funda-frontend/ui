import UiButton from '@/components/ui-button.vue';
import { shallowMount } from '@vue/test-utils';

let spy = jest.fn();
describe('UiButton', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiButton, {
            listeners: { click: spy },
        });
    });

    it('Should render anchor instead of button element when href is set', async () => {
        wrapper.setProps({
            href: '#',
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.element.tagName).toBe('A');
    });

    it('Should have tone classes when tone is set', async () => {
        const button = wrapper.findComponent(UiButton).find('button');
        wrapper.setProps({
            tone: 'primary',
        });
        await wrapper.vm.$nextTick();
        expect(button.classes()).toContain('bg-orange-2');
    });

    it('Should disable button when disable property is set', async () => {
        const button = wrapper.findComponent(UiButton).find('button');
        wrapper.setProps({
            tone: 'secondary',
            disabled: true,
        });
        await wrapper.vm.$nextTick();
        expect(button.classes()).toContain('cursor-not-allowed');
    });

    it('Should change width of button when property small is set', async () => {
        const button = wrapper.findComponent(UiButton).find('button');
        wrapper.setProps({
            small: true,
        });
        await wrapper.vm.$nextTick();
        expect(button.classes()).toContain('px-2');
    });

    it('Should call click event when method is attached to @click', async () => {
        await wrapper.trigger('click');
        expect(spy).toBeCalled();
    });
});
