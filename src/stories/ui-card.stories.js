import UiCard from '@/components/ui-card.vue';
import UiCardImage from '@/components/ui-card-image.vue';
import UiCardTitle from '@/components/ui-card-title.vue';
import UiNotification from '@/components/ui-notification.vue';

export default {
    title: 'Layout/Card',
    component: UiCard,
    argTypes: {},
};

const Template = () => ({
    components: { UiCard },
    template: ` <ui-card>
                    Card content
                </ui-card>`,
});
export const Card = Template.bind({});

const TemplateInside = () => ({
    components: { UiCard, UiNotification },
    template: ` <ui-card>
                    <template v-slot:title>
                        Card title inside
                    </template>
                    Card content
                </ui-card>`,
});
export const CardTitleInside = TemplateInside.bind({});

const TemplateSubtitleOutside = () => ({
    components: { UiCard, UiCardTitle },
    template: ` <div class="bg-light-2 p-4">
                    <ui-card-title>
                        <template v-slot:title>
                            Title title outside
                        </template>
                        <template v-slot:intro>
                            Subtitle
                        </template>
                    </ui-card-title>
                    <ui-card>
                        Card content
                    </ui-card>
                </div>`,
});
export const CardTitleSubtitleOutside = TemplateSubtitleOutside.bind({});

const TemplateOutside = () => ({
    components: { UiCard, UiCardTitle },
    template: ` <div class="bg-light-2 p-4">
                    <ui-card-title>
                        <template v-slot:title>
                            Title title outside
                        </template>
                    </ui-card-title>
                    <ui-card>
                        Card content
                    </ui-card>
                </div>`,
});
export const CardTitleOutside = TemplateOutside.bind({});

const TemplateNotification = () => ({
    components: { UiCard, UiNotification },
    template: ` <ui-card>
                    <template v-slot:notifications>
                        <ui-notification type="success" :rounded="false" class=" px-4 md:px-6">
                            <template v-slot:notificationBody>
                                Success notification
                            </template>
                        </ui-notification>
                    </template>
                    Card content
                </ui-card>`,
});
export const CardWithNotification = TemplateNotification.bind({});

const TemplateTitleNotification = () => ({
    components: { UiCard, UiNotification },
    template: ` <ui-card>
                    <template v-slot:title>
                        Card title inside
                    </template>
                    <template v-slot:notifications>
                        <ui-notification type="success" :rounded="false" class=" px-4 md:px-6">
                            <template v-slot:notificationBody>
                                Success notification
                            </template>
                        </ui-notification>
                    </template>
                    Card content
                </ui-card>`,
});
export const CardTitleNotification = TemplateTitleNotification.bind({});

const TemplateImage = () => ({
    components: { UiCardImage },
    template: ` <ui-card-image src="https://placekitten.com/200/300" alt="A kitty cat">
                    Card content
                </ui-card-image>`,
});
export const CardImage = TemplateImage.bind({});
