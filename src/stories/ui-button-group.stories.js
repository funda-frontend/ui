import UiButton from '@/components/ui-button.vue';
import UiButtonGroup from '@/components/ui-button-group.vue';

export default {
    title: 'Forms/Button',
    component: UiButtonGroup,
};

const Template = () => ({
    components: {
        UiButtonGroup,
        UiButton,
    },
    template: `<ui-button-group>
            <ui-button tone="secondary">Left</ui-button>
            <ui-button tone="secondary">Middle</ui-button>
            <ui-button tone="secondary">Right</ui-button>
        </ui-button-group>`,
});

export const ButtonGroup = Template.bind({});
