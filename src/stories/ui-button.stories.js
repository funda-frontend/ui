import UiButton from '@/components/ui-button.vue';

export default {
    title: 'UI Button',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const buttonData = {
    label: 'Just a label'
  };

const buttonTemplate = `<ui-button :button="button"></ui-button>`;

export const Default = () => ({
    components: { UiButton },
    template: buttonTemplate,
    props: {
        button: {
          default: () => buttonData,
        },
    },
});
