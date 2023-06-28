import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { LoginRequestDTO } from '@services/auth/dtos/request/LoginRequestDTO';
import { AuthService } from '@services/auth';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

type AuthContextTypeData = {
  handleLogin: (data: LoginRequestDTO) => Promise<void>;
  requestStates: loadingStates;
};

export const AuthContext = createContext({} as AuthContextTypeData);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [requestStates, setRequestStates] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );
  const authService = new AuthService();

  const handleLogin = async (data: LoginRequestDTO) => {
    try {
      setRequestStates(loadingStatesEnum.PENDING);

      const response = await authService.Login(data);
    } catch (e) {
      setRequestStates(loadingStatesEnum.ERROR);
    }
  };
  return (
    <AuthContext.Provider value={{ handleLogin, requestStates }}>
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
