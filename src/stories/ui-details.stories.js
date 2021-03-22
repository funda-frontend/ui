import UiDetails from '@/components/ui-details.vue';
import UiCard from '@/components/ui-card.vue';

export default {
    title: 'Layout/Details',
    component: UiDetails,
};

const Template = (args) => ({
    components: { UiDetails, UiCard },
    props: Object.keys(args),
    template: `
    <div>
        <ui-details :class="accordion ? 'border-light-2 border-b border-t border-solid' : ''">
            <template #title><span :class="accordion ? 'font-semibold' : ''">I only contain paragraph</span></template>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat quis felis id lobortis. Donec eget metus vel lacus euismod egestas. Maecenas in nisi est. Nullam semper ligula vitae ipsum sodales vestibulum. Nunc quis leo congue, interdum ipsum at, tristique quam. Aenean interdum bibendum neque vitae tincidunt.
        </ui-details>

        <ui-details :class="accordion ? 'border-light-2 border-b border-solid' : ''">
            <template #title><span :class="accordion ? 'font-semibold' : ''">I have component as content</span></template>
            <ui-card class="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ui-card>
        </ui-details>
    </div>`,
});

export const Default = Template.bind({});

export const Accordion = Template.bind({});
Accordion.args = { accordion: true };
