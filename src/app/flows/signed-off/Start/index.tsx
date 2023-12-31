import React from 'react';
import { StartLayout } from './layout';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '@routes/routes';
import { StartNavigatorProps } from './navigator';

export function Start() {
  const { navigate } = useNavigation<StartNavigatorProps>();
  const handleGoToLogin = () => {
    navigate(RoutesEnum.LOGIN);
  };

  const handleGoToRegister = () => {
    navigate(RoutesEnum.REGISTER);
  };

  return (
    <StartLayout
      handleGoToLogin={handleGoToLogin}
      handleGoToRegister={handleGoToRegister}
    ></StartLayout>
  );
}
