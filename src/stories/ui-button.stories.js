import UiButton from '@/components/ui-button.vue';

export default {
  title: 'Button',
  component: UiButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiButton },
  template: '<ui-button :name="name" :disabled="disabled">Testing button text</ui-button>',
});

export const Rounded = Template.bind({});
Rounded.args = {
  disabled: true,
  name: 'main-button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'main-button2',
};
