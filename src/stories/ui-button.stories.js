import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Forms/Button',
    component: UiButton,
    argTypes: {
        tone: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'primary-alt',
                    'secondary',
                    'secondary-alt',
                    'tertiary',
                    'transparent',
                    'danger',
                ],
            },
        },
        disabled: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiButton },
    template: `<div>
            <ui-button :tone="tone" @click="onClick" :disabled="disabled">Example button</ui-button>
            <ui-button href="#" :tone="tone" :disabled="disabled">Example link</ui-button>
        </div>`,
});

export const Button = Template.bind({});
Button.args = {
    tone: 'primary',
    disabled: false,
    onClick() {},
};
