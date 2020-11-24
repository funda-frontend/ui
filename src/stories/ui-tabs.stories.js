import UiTabs from '@/components/ui-tabs.vue';
import UiTab from '@/components/ui-tab.vue';

export default {
    title: 'Layout/Tabs',
    component: UiTabs,
    argTypes: {
        selected: {
            control: {
                type: 'select',
                options: ['tab1', 'tab2', 'tab3'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        UiTabs,
        UiTab,
    },
    data: () => ({
        tabs: [
            {
                label: 'Tab 1',
                value: 'tab1',
            },
            {
                label: 'Tab 2',
                value: 'tab2',
            },
            {
                label: 'Tab 3',
                value: 'tab3',
            },
        ],
    }),
    template: ` <div>
                    <ui-tabs>
                        <template v-for="(tab, i) in tabs">
                            <ui-tab :selected="selected==tab.value" @click="onClick(tab.value)">{{ tab.label }}</ui-tab>
                        </template>
                    </ui-tabs>
                    <template v-for="(tab, i) in tabs">
                        <div v-if="selected==tab.value">
                            {{ tab.value }} content
                        </div>
                    </template>
                </div>`,
});

export const DataList = Template.bind({});
DataList.args = {
    selected: 'tab1',
    onClick(value) {
        this.selected = value;
    },
};
