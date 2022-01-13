import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('Go to calculator component', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Calculator'));
    const items = await screen.findAllByRole('button');
    expect(items).toHaveLength(19);
  });

  test('Check home component', () => {
    const { container } = render(<App />);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelector('p')).toBeTruthy();
  });

  test('Check home component', async () => {
    const { container } = render(<App />);
    await userEvent.click(screen.getByText('Quote'));
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelector('p')).toBeFalsy();
  });
});
