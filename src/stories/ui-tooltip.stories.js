import UiTooltip from '@/components/ui-tooltip.vue';

export default {
    title: 'Informational/Tooltip',
    component: UiTooltip,
    argTypes: {
        background: {
            control: {
                type: 'select',
                options: ['white', 'blue', 'light'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiTooltip },
    template: `<ui-tooltip :background="background">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                   vestibulum turpis enim, eget tempor tellus placerat at.
               </ui-tooltip>`,
});

export const Tooltip = Template.bind({});
Tooltip.args = {
    background: 'light',
};
