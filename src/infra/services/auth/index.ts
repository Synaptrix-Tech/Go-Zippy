import { api } from '@http/http-client';
import { LoginRequestDTO } from './dtos/request/LoginRequestDTO';
import { RegisterRequestDTO } from './dtos/request/RegisterRequestDTO';
import { LoginResponseDTO } from './dtos/response/LoginResponseDTO';

export class AuthService {
  private routes = {
    login: '/users/sessions',
    register: '/users',
  };

  public async Login({
    email,
    password,
  }: LoginRequestDTO): Promise<LoginResponseDTO> {
    try {
      const response = await api.post(this.routes.login, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);

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
