import UiDatepicker from '@/components/ui-datepicker.vue';

export default {
    title: 'Forms/Datepicker',
    component: UiDatepicker,
};

const Template = args => ({
    components: { UiDatepicker },
    template: `
        <ui-datepicker></ui-datepicker>
    `,
});

export const Datepicker = Template.bind({});
