import { api } from '@http/http-client';
import { LoginRequestDTO } from './dtos/request/LoginRequestDTO';
import { RegisterRequestDTO } from './dtos/request/RegisterRequestDTO';

export class AuthService {
  private routes = {
    login: '/users/sessions',
    register: '/users',
  };

  public async Login({
    email,
    password,
  }: LoginRequestDTO): Promise<LoginRequestDTO> {
    try {
      const response = await api.post(this.routes.login, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async Register({ email, name, password, phone }: RegisterRequestDTO) {
    try {
      const response = await api.post(this.routes.register, {
        email,
        name,
        password,
        phone,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}
