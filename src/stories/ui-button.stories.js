import UiButton from '@/components/ui-button.vue';

export default {
    title: 'Forms',
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
                ],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiButton },
    template: '<ui-button :tone="tone">Example button</ui-button>',
});

export const Button = Template.bind({});
Button.args = {
    tone: 'primary',
};
