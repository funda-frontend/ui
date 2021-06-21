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
        text: 'Asking price',
        value: 'price',
    },
    {
        text: 'Floor area',
        value: 'floorarea',
        disabled: true,
    },
    {
        text: 'Zip code',
        value: 'zipcode',
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

    it('Should set border classes when isValid is set', async () => {
        await wrapper.setProps({ isValid: false });
        expect(wrapper.vm.isValid).toBe(false);
        expect(select.classes()).toContain('border-red-1');

        await wrapper.setProps({ isValid: true });
        expect(wrapper.vm.isValid).toBe(true);
        expect(select.classes()).toContain('border-light-1');
    });

    it('Should disable select when disabled prop is set', async () => {
        await wrapper.setProps({ disabled: true });
        expect(select.element.disabled).toBe(true);
        expect(select.classes()).toContain('bg-light-3');
    });

    it('Should select option when option is clicked', () => {
        options.at(2).setSelected();
        expect(wrapper.find('option:checked').element.value).toBe('floorarea');
    });

    it('Should disable option when disabled prop is set', () => {
        expect(options.at(2).element.disabled).toBe(true);
        expect(options.at(3).element.disabled).toBe(false);
    });

    it('Should hide option when hidden prop is set', () => {
        expect(options.at(2).isVisible()).toBe(true);
        expect(options.at(3).isVisible()).toBe(false);
    });

    it('Should set text when text prop is set', () => {
        expect(options.at(1).text()).toBe('Asking price');
    });

    it('Should select option with prop value', async () => {
        await wrapper.setProps({ value: optionsMock[2].value });
        expect(wrapper.find('option:checked').element.value).toBe(
            optionsMock[2].value
        );
    });

    it('Should emit change event with value', () => {
        options.at(2).setSelected();
        expect(wrapper.emitted().change[0]).toEqual([optionsMock[2].value]);
    });
});
