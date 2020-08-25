import { render } from '@testing-library/vue';
import Component from '@/components/ui-input.vue'

test('input should render', () => {
    const { queryByText } = render(Component);
    expect(queryByText('Accept')).toBe(null);
});