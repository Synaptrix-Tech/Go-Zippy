import React from 'react';
import { RegisterLayout } from './layout';
import { useAuth } from '@hooks/network/useAuth';

export function Register() {
  const { handleRegister, requestStates } = useAuth();
  return (
    <RegisterLayout
      handleRegister={handleRegister}
      requestStates={requestStates}
    ></RegisterLayout>
  );
}
