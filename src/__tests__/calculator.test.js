import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator/Calculator';

describe('Calculator component', () => {
  test('snapshot', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('addition', async () => {
    const dom = render(<Calculator />);

    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const input = dom.container.querySelector('#input');
    expect(input.innerHTML).toBe('552');
  });

  test('multiplication', async () => {
    const dom = render(<Calculator />);

    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('x'));
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const input = dom.container.querySelector('#input');
    expect(input.innerHTML).toBe((462 * 90).toString());
  });

  test('not finished operation of multiplication', async () => {
    const dom = render(<Calculator />);

    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('.'));
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('x'));
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('0'));
    const input = dom.container.querySelector('#input');
    expect(input.innerHTML).toBe('4.1x90');
  });

  test('division', async () => {
    const dom = render(<Calculator />);

    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const input = dom.container.querySelector('#input');
    expect(input.innerHTML).toBe('2');
  });
});
