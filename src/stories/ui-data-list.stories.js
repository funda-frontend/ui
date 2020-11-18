import UiDataList from '@/components/ui-data-list.vue';
import UiDataTerm from '@/components/ui-data-term.vue';
import UiDataDescription from '@/components/ui-data-description.vue';

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
        UiDataTerm,
        UiDataDescription,
    },
    data: () => ({
        listData: [{ Name: 'Jane Doe' }, { Phone: '020 561 8200' }],
    }),
    template: `<ui-data-list>
            <template v-for="(item, i) in listData">
                <ui-data-term :card="card">
                    {{ Object.keys(item)[0] }}
                </ui-data-term>
                <ui-data-description :card="card">
                    {{ item[Object.keys(item)[0]] }}
                </ui-data-description>
            </template>
        </ui-data-list>`,
});

export const DataList = Template.bind({});
DataList.args = {
    card: false,
};
