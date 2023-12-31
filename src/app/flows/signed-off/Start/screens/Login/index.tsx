import React from 'react';
import { LoginLayout } from './layout';
import { useAuth } from '@hooks/network/useAuth';
import { useUserStore } from '@store/userStore';

export function Login() {
  const { handleLogin, requestStates } = useAuth();

  return (
    <LoginLayout
      handleLogin={handleLogin}
      requestStates={requestStates}
    ></LoginLayout>
  );
}
