import UiTextarea from '@/components/ui-textarea.vue';

export default {
    title: 'Forms/Textarea',
    component: UiTextarea,
    argTypes: {
        isValid: {
            control: {
                options: [true, false],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiTextarea },
    template:
        '<ui-textarea :isValid="isValid" @change="onChange">Textarea text 📝</ui-textarea>',
});
export const Textarea = Template.bind({});
Textarea.args = {
    onChange() {},
    isValid: true,
};
