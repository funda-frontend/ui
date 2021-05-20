import { mount } from '@vue/test-utils';
import UiSelect from '@/components/ui-select.vue';

const optionsMock = [
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
];

describe('UiSelect', () => {
    let wrapper, select, options;
    beforeEach(() => {
        wrapper = mount(UiSelect, {
            propsData: {
                options: optionsMock,
            },
        });
        select = wrapper.find('select');
        options = select.findAll('option');
    });

    it('Select is valid', async () => {
        await wrapper.setProps({ isValid: false });
        expect(select.classes()).toContain('border-red-1');

        await wrapper.setProps({ isValid: true });
        expect(select.classes()).toContain('border-light-1');
    });

    it('Select is disabled', async () => {
        await wrapper.setProps({ disabled: true });
        expect(select.element.disabled).toBe(true);
        expect(select.classes()).toContain('bg-light-3');
    });

    it('Option is selected', async () => {
        await options.at(2).setSelected();
        expect(wrapper.find('option:checked').element.value).toBe('test2');
    });

    it('Option is disabled', () => {
        expect(options.at(2).element.disabled).toBe(true);
        expect(options.at(3).element.disabled).toBe(false);
    });

    it('Option is hidden', () => {
        expect(options.at(2).isVisible()).toBe(true);
        expect(options.at(3).isVisible()).toBe(false);
    });

    it('Option text is set', () => {
        expect(options.at(2).text()).toBe('Option B');
    });
});
