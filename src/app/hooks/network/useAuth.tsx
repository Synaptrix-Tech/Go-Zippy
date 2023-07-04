import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LoginRequestDTO } from '@services/auth/dtos/request/LoginRequestDTO';
import { AuthService } from '@services/auth';
import { loadingStates, loadingStatesEnum } from '@ts/loading';
import { RegisterRequestDTO } from '@services/auth/dtos/request/RegisterRequestDTO';
import { useUserStore } from '@store/userStore';
import { api } from '@http/http-client';

type AuthContextTypeData = {
  handleLogin: (data: LoginRequestDTO) => Promise<void>;
  handleRegister: (data: RegisterRequestDTO) => Promise<void>;
  requestStates: loadingStates;
};

export const AuthContext = createContext({} as AuthContextTypeData);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [requestStates, setRequestStates] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );
  const { update } = useUserStore();
  const authService = new AuthService();

  const handleLogin = async (data: LoginRequestDTO) => {
    try {
      setRequestStates(loadingStatesEnum.PENDING);

      const { token } = await authService.Login(data);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      update(token);

      setRequestStates(loadingStatesEnum.DONE);
    } catch (e) {
      setRequestStates(loadingStatesEnum.ERROR);
    }
  };

  const handleRegister = async (data: RegisterRequestDTO) => {
    try {
      setRequestStates(loadingStatesEnum.PENDING);

      const response = await authService.Register(data);
      setRequestStates(loadingStatesEnum.DONE);
    } catch (e) {
      setRequestStates(loadingStatesEnum.ERROR);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, requestStates, handleRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
};
