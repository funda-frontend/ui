import UiSpinner from '@/components/ui-spinner.vue';

export default {
    title: 'Visual/Spinner',
    component: UiSpinner,
    argTypes: {
        show: {
            control: {
                options: [true, false],
            },
        },
        tone: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'white'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiSpinner },
    template: `
        <div class="bg-blue-5 flex h-40 items-center justify-center">
            <ui-spinner :size="size" :show="show" :tone="tone"></ui-spinner>
        </div>`,
});

export const Spinner = Template.bind({});
Spinner.args = {
    show: true,
    size: 'small',
    tone: 'primary',
};
