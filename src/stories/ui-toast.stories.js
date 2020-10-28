import UiToast from '@/components/ui-toast.vue';

export default {
    title: 'Informational',
    component: UiToast,
};

const Template = () => ({
    components: { UiToast },
    template: '<ui-toast>Toast lorem ipsum sitamet doloris.</ui-toast>',
});

export const Toast = Template.bind({});
