import { render } from '@testing-library/react';
import Home from '../components/home/Home';

describe('Tests for Home Page', () => {
  test('Home Component', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelector('p')).toBeTruthy();
  });
});
