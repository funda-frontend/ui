import { shallowMount } from '@vue/test-utils';
import UiRadio from '@/components/ui-radio.vue';

describe('UiRadio', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(UiRadio);
    });

    it('Should set flex class when alignHorizontal is true', () => {
        wrapper.setProps({ alignHorizontal: true });
        expect(wrapper.find('div.flex-1').exists());
    });
});
