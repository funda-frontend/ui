import { mount } from '@vue/test-utils';
import UiSelect from '@/components/ui-select.vue';

describe('UiModal', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(UiSelect, {
            propsData: {
                options: [
                    {
                        text: 'Select a value',
                        value: '',
                        disabled: true,
                        hidden: true,
                    },
                    {
                        text: 'Option A',
                        value: 'test',
                    },
                    {
                        text: 'Option B',
                        value: 'test2',
                        disabled: true,
                    },
                    {
                        text: 'Option C',
                        value: 'test3',
                        hidden: true,
                    },
                ],
            },
        });
    });

    it('Should set selected option', async () => {
        const select = wrapper.find('select');
        const options = select.findAll('option');
        await options.at(2).setSelected();
        expect(wrapper.find('option:checked').element.value).toBe('test2');
    });

    it('Should render status classes when isValid prop is set', async () => {
        const select = wrapper.find('select');
        await wrapper.setProps({ isValid: false });
        expect(select.classes()).toContain('border-red-1');

        await wrapper.setProps({ isValid: true });
        expect(select.classes()).toContain('border-light-1');
    });

    it('Should disable select', async () => {
        const select = wrapper.find('select');
        await wrapper.setProps({ disabled: true });
        await wrapper.vm.$nextTick();
        expect(select.element.disabled).toBe(true);
        expect(select.classes()).toContain('bg-light-3');
    });

    it('Should disable option when key is set', async () => {
        const select = wrapper.find('select');
        const options = select.findAll('option');
        expect(options.at(2).element.disabled).toBe(true);
        expect(options.at(3).element.disabled).toBe(false);
    });

    it('Should determine visibility of option depending on hidden key', async () => {
        const select = wrapper.find('select');
        const options = select.findAll('option');
        expect(options.at(2).isVisible()).toBe(true);
        expect(options.at(3).isVisible()).toBe(false);
    });

    it('Should set values for option', async () => {
        const select = wrapper.find('select');
        const options = select.findAll('option');
        expect(options.at(2).text()).toBe('Option B');
    });
});
