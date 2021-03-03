import UiBadge from '@/components/ui-badge.vue';

export default {
    title: 'Visual/Badge',
    component: UiBadge,
};

const Template = args => ({
    components: { UiBadge },
    template: `
        <ui-badge>
            Badge
        </ui-badge>`,
});

export const Badge = Template.bind({});
