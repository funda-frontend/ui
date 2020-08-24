import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import UiButton from '@/components/ui-button.vue';

const actionsData = {
    onClick: action('onClick'),
};

const buttonData = {};

const buttonTemplate = `<ui-button :button="button" @handleClick="onClick">Default Button</ui-button>`;

storiesOf('Components/Button', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
                default: object('button', { ...buttonData }),
            },
        },
        methods: actionsData
    }))
    .add('primary', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
                default: object('button', {
                    ...buttonData,
                    type: 'btn--primary',
                    label: 'Primary Button'
                }),
            },
        },
        methods: actionsData
    }))
    .add('secondary', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
                default: object('button', {
                    ...buttonData,
                    type: 'btn--secondary',
                    label: 'Secondary Button'
                }),
            },
        },
        methods: actionsData
    }))
    .add('link', () => ({
        components: { UiButton },
        template: buttonTemplate,
        props: {
            button: {
                default: object('button', {
                    ...buttonData,
                    label: 'Link button',
                    url: 'https://www.funda.nl'
                }),
            },
        },
        methods: actionsData
    }));
