import { fireEvent, render } from '@mocks/render';
import React from 'react';
import { Input, InputProps } from '.';

const makeSut = ({ passwordType = false, value = '', ...rest }: InputProps) => {
  return render(<Input passwordType={passwordType} value={value} {...rest} />);
};

describe('Input Component', () => {
  it('Should be change call onChangeText fn', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = makeSut({ onChangeText });
    const input = getByTestId('input');
    fireEvent.changeText(input, 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('Should be text security when has passwordType ', () => {
    const { getByTestId } = makeSut({ passwordType: true });
    const input = getByTestId('input');

    expect(input.props.secureTextEntry).toBe(true);
  });

  it('Should be text security change when click in the eye ', () => {
    const { getByTestId, getByRole } = makeSut({ passwordType: true });
    const input = getByTestId('input');
    const eyeBtn = getByRole('button');

    fireEvent.press(eyeBtn);

    expect(input.props.secureTextEntry).toBe(false);
  });
});
