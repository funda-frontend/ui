import UiInput from '@/components/ui-input.vue';

export default {
    title: 'Forms/Input',
    component: UiInput,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: [
                    'text',
                    'number',
                    'email',
                    'password',
                    'search',
                    'tel',
                    'url',
                ],
            },
        },
        isValid: {
            control: {
                options: [true, false],
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
        disabled: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template:
        '<ui-input @change="onChange" :type="type" :isValid="isValid" :placeholder="placeholder" :value.sync="value" :disabled="disabled"/>',
});
export const Input = Template.bind({});
Input.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeholder: 'placeholder',
    disabled: false,
    onChange() {},
};

const TemplatePrefixSufix = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiInput },
    template: `<ui-input @change="onChange" :type="type" :isValid="isValid" :placeholder="placeholder" :value.sync="value" :disabled="disabled">
                <template v-slot:prefix><div class="text-light-1 py-2 px-4 absolute top-0 left-0">PF</div></template>
                <template v-slot:sufix><div class="text-light-1 py-2 px-4 absolute top-0 right-0">SF</div></template>
               </ui-input>`,
});
export const InputExtras = TemplatePrefixSufix.bind({});
InputExtras.args = {
    type: 'text',
    isValid: true,
    value: 'lorem ipsum sitamet doloris.',
    placeholder: 'placeholder',
    disabled: false,
    onChange() {},
};
