import UiButton from '@/components/ui-button.vue';
import UiButtonGroup from '@/components/ui-button-group.vue';

export default {
    title: 'Forms/Button group',
    component: UiButtonGroup,
};

const Template = () => ({
    components: {
        UiButtonGroup,
        UiButton,
    },
    template: `<ui-button-group>
            <ui-button tone="primary">Example button</ui-button>
            <ui-button tone="primary">Example button</ui-button>
            <ui-button tone="primary">Example button</ui-button>
        </ui-button-group>`,
});

export const ButtonGroup = Template.bind({});
