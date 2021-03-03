import UiTooltip from '@/components/ui-tooltip.vue';

export default {
    title: 'Visual/Tooltip',
    component: UiTooltip,
    argTypes: {
        background: {
            control: {
                type: 'select',
                options: ['white', 'blue', 'light'],
            },
        },
        trigger: {
            control: {
                type: 'select',
                options: ['hover', 'clickToOpen', 'clickToToggle', 'focus'],
            },
        },
        side: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiTooltip },
    template: `<ui-tooltip :trigger="trigger" :side="side" :background="background">
                    <template v-slot:content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </template>
                    <template v-slot:reference>
                        Reference Element
                    </template>
              </ui-tooltip>`,
});

export const Tooltip = Template.bind({});
Tooltip.args = {
    background: 'light',
    trigger: 'hover',
    side: 'bottom',
};
Tooltip.decorators = [
    () => ({
        template:
            '<div class="flex items-center justify-center h-40 mt-10"><story/></div>',
    }),
];
