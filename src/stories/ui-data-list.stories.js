import UiDataList from '@/components/ui-data-list.vue';
import UiDt from '@/components/ui-dt.vue';
import UiDd from '@/components/ui-dd.vue';

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
    components: {
        UiDataList,
        UiDt,
        UiDd,
    },
    data: () => ({
        listData: [{ Name: 'Jane Doe' }, { Phone: '020 561 8200' }],
    }),
    template: `<ui-data-list>
            <template v-for="(item, i) in listData">
                <ui-dt :card="card">{{ Object.keys(item)[0] }}</ui-dt>
                <ui-dd :card="card">{{ item[Object.keys(item)[0]] }}</ui-dd>
            </template>
        </ui-data-list>`,
});

export const DataList = Template.bind({});
DataList.args = {
    card: false,
};
