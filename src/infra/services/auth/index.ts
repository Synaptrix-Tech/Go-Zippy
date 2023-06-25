import { api } from 'src/infra/http/http-client';
import { LoginRequestDTO } from './dtos/request/LoginRequestDTO';

export class AuthService {
  private routes = {
    login: '/users/sessions',
    register: '/users',
  };

  public async Login({ email, password }: LoginRequestDTO) {
    try {
      const response = await api.post(this.routes.login, {
        email,
        password,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
