import React from 'react';
import { Alert, Props } from '.';
import { render } from '@mocks/render';
import { theme } from '@styles/themes';

const makeSut = ({ message, type }: Props) => {
  return render(<Alert message={message} type={type} />);
};

describe('Alert Component', () => {
  it('should have the success style', () => {
    const { getByTestId } = makeSut({
      type: 'success',
      message: 'success message',
    });
    const alert = getByTestId('alert-box');
    const text = getByTestId('alert-text');
    const icon = getByTestId('success-icon');

    expect(alert).toHaveStyle({
      backgroundColor: theme.colors.GREEN_LIGHT,
    });
    expect(text).toHaveStyle({
      color: theme.colors.GREEN_DARK,
    });
    expect(icon).toBeTruthy();
    expect(alert).toHaveTextContent('success message');
  });
  it('should have the error style', () => {
    const { getByTestId } = makeSut({
      type: 'error',
      message: 'error message',
    });
    const alert = getByTestId('alert-box');
    const text = getByTestId('alert-text');
    const icon = getByTestId('error-icon');

    expect(alert).toHaveStyle({
      backgroundColor: theme.colors.RED_LIGHT,
    });
    expect(text).toHaveStyle({
      color: theme.colors.RED_ERROR_TEXT,
    });
    expect(icon).toBeTruthy();
    expect(alert).toHaveTextContent('error message');
  });

  it('should have the warning style', () => {
    const { getByTestId } = makeSut({
      type: 'warning',
      message: 'warning message',
    });
    const alert = getByTestId('alert-box');
    const text = getByTestId('alert-text');
    const icon = getByTestId('warning-icon');

    expect(alert).toHaveStyle({
      backgroundColor: theme.colors.YELLOW_LIGHT,
    });
    expect(text).toHaveStyle({
      color: theme.colors.YELLOW,
    });
    expect(icon).toBeTruthy();
    expect(alert).toHaveTextContent('warning message');
  });
});
