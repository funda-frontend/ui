import UiBadge from '@/components/ui-badge.vue';

export default {
    title: 'Visual',
    component: UiBadge,
};

const Template = () => ({
    components: { UiBadge },
    template: '<ui-badge>Badge</ui-button>',
});

export const Badge = Template.bind({});
