import UiAutosuggest from '@/components/ui-autosuggest.vue';

export default {
    title: 'Informational/Autosuggest',
    component: UiAutosuggest,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiAutosuggest },
    template: `
                <ui-autosuggest :list="list" :value="value" @clear-input="clear">
                    <template v-slot:sufix><div class="text-light-1 py-2 px-4 absolute top-0 right-0">SF</div></template>
                </ui-autosuggest>`,
});

export const AutoSuggest = Template.bind({});
AutoSuggest.args = {
    list: [
        {
            label: 'suggestion 1',
            value: 1,
        },
        {
            label: 'suggestion 2',
            value: 2,
        },
        {
            label: 'suggestion 3',
            value: 3,
        },
        {
            label: 'suggestion 4',
            value: 4,
        },
        {
            label: 'suggestion 5',
            value: 5,
        },

        {
            label: 'suggestion 6',
            value: 6,
        },
    ],
    value: '',
    clear() {
        console.log('clear');
    },
};
