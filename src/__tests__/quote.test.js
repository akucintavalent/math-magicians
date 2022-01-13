import { render } from '@testing-library/react';
import Quote from '../components/quote/Quote';

describe('Quote component', () => {
  test('should render', () => {
    const { container } = render(<Quote />);
    expect(container.querySelector('h2')).toBeTruthy();
  });
});
