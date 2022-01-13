import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Button from '../components/button/Button';

describe('test text button', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Button
        key="AC"
        handleClick={() => { }}
        buttonName="AC"
        isOrange={false}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test click ', async () => {
    const handleClick = jest.fn();
    render(<Button
      key="AC"
      handleClick={handleClick}
      buttonName="AC"
      isOrange={false}
    />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
