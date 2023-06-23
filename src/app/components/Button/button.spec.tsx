import React from 'react';
import { Button, ButtonProps } from '.';
import { render } from '@mocks/render';
import { ArrowLeft } from 'phosphor-react-native';

const makeSut = ({
  disabled = false,
  backgroundColor = '#000',
  loading = false,
  title = 'Test button',
  variation = 'contained',
  icon,
  leftIcon,
}: ButtonProps) => {
  const props = {
    disabled,
    backgroundColor,
    loading,
    title,
    variation,
    icon,
    leftIcon,
  };
  return render(<Button {...props} />);
};

describe('Button Component', () => {
  it('should be render with the selected color', () => {
    const { getByRole } = makeSut({});
    const btn = getByRole('button');

    expect(btn).toHaveStyle({
      backgroundColor: '#000',
    });
  });

  it('should be render the prop title', () => {
    const { getByRole } = makeSut({});
    const btn = getByRole('button');

    expect(btn).toHaveTextContent('Test button');
  });
  it('should be loading', () => {
    const { getByRole, getByTestId } = makeSut({ loading: true });
    const btn = getByRole('button');

    const loadingIndicator = getByTestId('loading-indicator');

    expect(btn).not.toHaveTextContent('Test button');
    expect(loadingIndicator).toBeOnTheScreen();
  });

  it('should be disabled', () => {
    const { getByRole } = makeSut({ disabled: true });
    const btn = getByRole('button');

    expect(btn).toBeDisabled();
    expect(btn).toHaveStyle({
      backgroundColor: '#C4C4CC',
    });
  });

  it('should be outline mode', () => {
    const { getByRole } = makeSut({ variation: 'outline' });
    const btn = getByRole('button');

    expect(btn).toHaveStyle({
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#000',
    });
  });

  it('should be render a icon', async () => {
    const { getByTestId } = makeSut({
      icon: <ArrowLeft size={16} color="#f3f" />,
    });

    const iconContainer = getByTestId('icon-container');
    const contentContainer = getByTestId('content-container');

    expect(iconContainer).toBeTruthy();
    expect(contentContainer).not.toHaveStyle({
      flexDirection: 'row-reverse',
    });
  });

  it('should be render icon in left side', () => {
    const { getByTestId } = makeSut({
      icon: <ArrowLeft size={16} color="#f3f" />,
      leftIcon: true,
    });

    const contentContainer = getByTestId('content-container');

    expect(contentContainer).toHaveStyle({
      flexDirection: 'row-reverse',
    });
  });
});
