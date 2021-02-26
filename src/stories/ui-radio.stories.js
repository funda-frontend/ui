import UiRadio from '@/components/ui-radio.vue';

export default {
    title: 'Forms/Radio',
    component: UiRadio,
    argTypes: {
        disabled: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiRadio },
    template:
        '<ui-radio @change="onChange" :disabled="disabled" id="input-id" :checked="true">Radio</ui-radio>',
});

export const Input = Template.bind({});
Input.args = {
    disabled: false,
    onChange() {},
};

const TemplateSlotLabel = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiRadio },
    template: `
        <ui-radio change="onChange" :disabled="disabled" id="input-slot-extras-id" :checked="true">
            <div>
                <h3 class="font-bold m-0">Radio Title</h3>
                <div class="text-dark-2">Description</div>
            </div>
        </ui-radio>`,
});

export const InputSlotLabel = TemplateSlotLabel.bind({});
InputSlotLabel.args = {
    disabled: false,
    onChange() {},
};
