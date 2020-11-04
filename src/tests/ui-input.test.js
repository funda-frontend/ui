import UiInput from '@/components/ui-input.vue';
import { render } from '@testing-library/vue';

const setup = (isValid) => {
    const props = {
        type: 'text',
        isValid,
        value: 'lorem ipsum sitamet doloris.',
        placeHolder: 'PlaceHolder',
        validationMessage: 'Ooops',
        onChange() {},
        sufixText: 'Sufix text',
        prefixText: 'Prefix text',
    };

    return render(UiInput, {
        props,
    });
};

test('input should render value if passed', async () => {
    const { getByDisplayValue } = setup();

    expect(getByDisplayValue('lorem ipsum sitamet doloris.')).toBeInTheDocument;
});

test('input should render prefix and sufix if passed', async () => {
    const { getByText } = setup();

    expect(getByText('Sufix text')).toBeInTheDocument;
    expect(getByText('Prefix text')).toBeInTheDocument;
});

test('input should render the message error if is invalid', async () => {
    const isValid = false;
    const { getByText } = setup(isValid);

    expect(getByText('Ooops')).toBeInTheDocument;
});
