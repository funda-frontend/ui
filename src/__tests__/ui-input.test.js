import { mount } from '@vue/test-utils';
import UiInput from '@/components/ui-input.vue';

const SLOT_PREFIX = '€';
const SLOT_SUFIX = 'icon';

describe('UiInput', () => {
    let wrapper, input;
    beforeEach(() => {
        wrapper = mount(UiInput, {
            slots: {
                prefix: SLOT_PREFIX,
                sufix: SLOT_SUFIX,
            },
        });
        input = wrapper.find('input');
    });

    it('Set value', () => {
        input.setValue('Amsterdam');
        expect(input.element.value).toBe('Amsterdam');
    });

    it('Is valid', async () => {
        await wrapper.setProps({ isValid: false });
        expect(wrapper.vm.isValid).toBe(false);
        expect(input.classes()).toContain('border-red-1');

        await wrapper.setProps({ isValid: true });
        expect(wrapper.vm.isValid).toBe(true);
        expect(input.classes()).toContain('border-light-1');
    });

    it('Set type', async () => {
        await wrapper.setProps({ type: 'number' });
        expect(wrapper.vm.type).toBe('number');
    });

    it('Set slots', () => {
        expect(wrapper.text()).toContain(SLOT_PREFIX);
        expect(input.classes()).toContain('pl-12');

        expect(wrapper.text()).toContain(SLOT_SUFIX);
        expect(input.classes()).toContain('pr-12');
    });
});
