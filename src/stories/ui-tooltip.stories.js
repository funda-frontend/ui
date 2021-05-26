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
        options: {
            control: {
                type: 'object',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiTooltip },
    template: `<ui-tooltip :trigger="trigger" :options="options" :background="background">
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
    trigger: 'click',
    options: {
        placement: 'top',
        modifiers: {
            offset: {
                offset: '1000px,0',
            },
        },
    },
};
Tooltip.decorators = [
    () => ({
        template:
            '<div class="flex items-center justify-center h-40 mt-10"><story/></div>',
    }),
];
