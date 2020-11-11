import UiInput from '@/components/ui-input.vue';

export default {
    title: 'Forms/Input',
    component: UiInput,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['text', 'number'],
            },
        },
        isValid: {
            control: {
                options: [true, false],
            },
        },
        hasPrefix: {
            control: {
                options: [true, false],
            },
        },
        hasSufix: {
            control: {
                options: [true, false],
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        placeHolder: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template: `<ui-input :hasPrefix="hasPrefix" :hasSufix="hasSufix" @change="onChange" :type="type" :isValid="isValid" :placeHolder="placeHolder" :value="value">
                <template v-slot:prefix><div class="text-light-1 py-2 px-4 absolute top-0 left-0">PF</div></template>
                <template v-slot:sufix><div class="text-light-1 py-2 px-4 absolute top-0 right-0">SF</div></template>
               </ui-input>`,
});

export const Input = Template.bind({});
Input.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeHolder: 'PlaceHolder',
    onChange() {},
};

export const InputExtras = Template.bind({});
InputExtras.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeHolder: 'PlaceHolder',
    onChange() {},
    hasSufix: true,
    hasPrefix: true,
};
