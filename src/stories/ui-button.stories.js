import { action } from '@storybook/addon-actions';
import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Button',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const actionsData = {
    onClick: action('onClick'),
};

export const buttonData = {
    label: 'Button',
  };

const buttonTemplate = `<ui-button :button="button" @handleClick="onClick"></ui-button>`;

export const Default = () => ({
    components: { UiButton },
    template: buttonTemplate,
    props: {
        button: {
          default: () => buttonData,
        },
    },
    methods: actionsData
});

export const Primary = () => ({
    components: { UiButton },
    template: buttonTemplate,
    props: {
        button: {
          default: () => ({
              ...buttonData,
              type: 'fd-btn--primary'
          })
        },
    },
    methods: actionsData
});

export const Secondary = () => ({
    components: { UiButton },
    template: buttonTemplate,
    props: {
        button: {
          default: () => ({
              ...buttonData,
              type: 'fd-btn--secondary'
          })
        },
    },
    methods: actionsData
});
