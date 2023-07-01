import React from 'react';
import { render } from '@mocks/render';
import { Header, Props } from '.';

const defaultValues = {
  cartCount: 0,
  notificationCount: 0,
  location: '',
};

const makeSut = (props: Props) => {
  return render(<Header {...props} />);
};

describe('Header Component', () => {
  it('Should render Location', () => {
    const { getByText } = makeSut({
      ...defaultValues,
      location: '1240, Estrada do Rio grande',
    });

    expect(getByText('1240, Estrada do Rio grande')).toBeTruthy();
  });
  it('Should render car badge', () => {
    const { getByText } = makeSut({
      ...defaultValues,
      cartCount: 2,
    });

    expect(getByText('2')).toBeTruthy();
  });
  it('Should render alert badge', () => {
    const { getByText } = makeSut({
      ...defaultValues,
      notificationCount: 2,
    });

    expect(getByText('2')).toBeTruthy();
  });

  it('Should`nt render alert badge', () => {
    const { queryByTestId } = makeSut({
      ...defaultValues,
      notificationCount: 0,
    });

    expect(queryByTestId('alert-badge')).not.toBeTruthy();
  });

  it('Should`nt render cart badge', () => {
    const { queryByTestId } = makeSut({
      ...defaultValues,
      cartCount: 0,
    });

    expect(queryByTestId('cart-badge')).not.toBeTruthy();
  });
});
