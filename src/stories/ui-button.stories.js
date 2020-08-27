import UiButtonPrimary from '@/components/ui-button-primary.vue';
import UiButtonPrimaryAlt from '@/components/ui-button-primary-alt.vue';
import UiButtonSecondary from '@/components/ui-button-secondary.vue';
import UiButtonSecondaryAlt from '@/components/ui-button-secondary-alt.vue';
import UiButtonTertiary from '@/components/ui-button-tertiary.vue';
import UiButtonTertiaryAlt from '@/components/ui-button-tertiary-alt.vue';


export default {
  title: 'Buttons',
};

export const Primary = () => ({
  components: { UiButtonPrimary },
  template: '<ui-button-primary>Testing button text</ui-button-primary>',
});

export const PrimaryAlt = () => ({
  components: { UiButtonPrimaryAlt },
  template: '<ui-button-primary-alt>Testing button text</ui-button-primary-alt>',
});

export const Secondary = () => ({
  components: { UiButtonSecondary },
  template: '<ui-button-secondary>Testing button text</ui-button-secondary>',
});

export const SecondaryAlt = () => ({
  components: { UiButtonSecondaryAlt },
  template: '<ui-button-secondary-alt>Testing button text</ui-button-secondary-alt>',
});

export const Tertiary = () => ({
  components: { UiButtonTertiary },
  template: '<ui-button-tertiary>Testing button text</ui-tertiary-button>',
});

export const TertiaryAlt = () => ({
  components: { UiButtonTertiaryAlt },
  template: '<ui-button-tertiary-alt>Testing button text</ui-button-tertiary-alt>',
});
