import UiTooltip from '@/components/ui-tooltip.vue';

export default {
    title: 'Informational/Tooltip',
    component: UiTooltip,
};

const Template = () => ({
    components: { UiTooltip },
    template: `<ui-tooltip>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                   vestibulum turpis enim, eget tempor tellus placerat at.
               </ui-tooltip>`,
});

export const Tooltip = Template.bind({});
