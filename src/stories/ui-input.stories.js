import UiInput from '@/components/ui-input.vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
    title: 'UI Input',
    decorators: [withKnobs],
    parameters: {
        notes: 'some documentation here',
    },
};

export const Default = () => ({
    components: { UiInput },
    props: {
        disabled: {
            default: boolean('Disabled', false),
        },
    },
    template: '<ui-input :disabled="disabled" id="foo" name="foo"></ui-input>',
});

export const AsNumber = () => ({
    components: { UiInput },
    template: '<ui-input type="number" id="foo" name="foo"></ui-input>',
});
