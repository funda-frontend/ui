import UiDataList from '@/components/ui-data-list.vue';

export default {
    title: 'Layout/Data list',
    component: UiDataList,
    argTypes: {
        card: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiDataList },
    template: '<ui-data-list :card="card" :data="data"></ui-data-list>',
});

export const DataList = Template.bind({});
DataList.args = {
    data: [{ Name: 'Jane Doe' }, { Phone: '020 561 8200' }],
    card: false,
};
