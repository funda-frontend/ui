import UiFormGroup from '@/components/ui-form-group.vue';
import UiLabel from '@/components/ui-label.vue';
import UiInput from '@/components/ui-input.vue';
import UiSelect from '@/components/ui-select.vue';
import UiErrorMessage from '@/components/ui-error-message.vue';

export default {
    title: 'Forms/Form Group',
    component: UiFormGroup,
};

const Template = () => ({
    components: { UiFormGroup, UiLabel, UiInput, UiSelect },
    template: ` <div>
                    <ui-form-group>
                        <ui-label for="input1">Label for input</ui-label>
                        <ui-input id="input1" />
                    </ui-form-group>
                    <ui-form-group>
                        <ui-label for="select1">Label for select</ui-label>
                        <ui-select id="select1" :options="[{'text':'Select','value':0},{'text':'Option A','value':1},{'text':'Option B','value':2}]" :selected="1">Select</ui-select>
                    </ui-form-group>
                </div>`,
});
export const FormGroup = Template.bind({});

const TemplateInvalid = () => ({
    components: { UiFormGroup, UiLabel, UiInput, UiSelect, UiErrorMessage },
    template: ` <div>
                    <ui-form-group>
                        <ui-label for="input2">Label for input</ui-label>
                        <ui-input id="input2" :isValid="false" />
                        <ui-error-message>Error message</ui-error-message>
                    </ui-form-group>
                    <ui-form-group>
                        <ui-label for="select2">Label for select</ui-label>
                        <ui-select id="select2" :isValid="false" :options="[{'text':'Select','value':0},{'text':'Option A','value':1},{'text':'Option B','value':2}]" :selected="1">Select</ui-select>
                        <ui-error-message>Error message</ui-error-message>
                    </ui-form-group>
                </div>`,
});

export const FormGroupInvalid = TemplateInvalid.bind({});
