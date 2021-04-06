import UiAccordion from '@/components/ui-accordion.vue';

export default {
    title: 'Layout/Accordion',
    component: UiAccordion,
    argTypes: {
        open: {
            control: {
                options: [true, false],
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
    components: { UiAccordion },
    template: `
    <div>
        <ui-accordion :open="open" :disabled="disabled">
            <template #title><span class="font-semibold">Lorem ipsum dolor sit amet</span></template>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat quis felis id lobortis. Donec eget metus vel lacus euismod egestas. Maecenas in nisi est. Nullam semper ligula vitae ipsum sodales vestibulum. Nunc quis leo congue, interdum ipsum at, tristique quam. Aenean interdum bibendum neque vitae tincidunt.
        </ui-accordion>
        <ui-accordion :open="open" :disabled="disabled">
            <template #title><span class="font-semibold">Suspendisse placerat quis felis id lobortis</span></template>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat quis felis id lobortis. Donec eget metus vel lacus euismod egestas. Maecenas in nisi est. Nullam semper ligula vitae ipsum sodales vestibulum. Nunc quis leo congue, interdum ipsum at, tristique quam. Aenean interdum bibendum neque vitae tincidunt.
        </ui-accordion>
    </div>`,
});

export const Default = Template.bind({});
