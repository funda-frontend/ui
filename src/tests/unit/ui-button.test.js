import { shallowMount } from "@vue/test-utils";
import Component from '../../components/ui-button.vue';

describe('MyButton', () => {
  let vm
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Component)
    vm = wrapper.vm
  })

  describe('handleClick', () => {
    it('emits handleClick', () => {
      vm.$emit = jest.fn()
      vm.handleClick()
      expect(vm.$emit).toHaveBeenCalledWith('handleClick')
    })
  })
})
