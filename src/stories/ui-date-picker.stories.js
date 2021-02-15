import UiDatePicker from '@/components/ui-date-picker.vue';

export default {
    title: 'Forms/DatePicker',
    component: UiDatePicker,
};

const Template = () => ({
    components: { UiDatePicker },
    template: '<ui-date-picker></ui-date-picker>',
});

export const DatePicker = Template.bind({});
