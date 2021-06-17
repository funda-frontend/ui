import { shallowMount } from '@vue/test-utils';
import UiRadioGroup from '@/components/ui-radio-group.vue';

describe('UiRadioGroup', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiRadioGroup);
    });

    it('Should set flex class when alignHorizontal is true', () => {
        wrapper.setProps({ alignHorizontal: true });
        expect(wrapper.find('div.flex').exists());
    });
});
