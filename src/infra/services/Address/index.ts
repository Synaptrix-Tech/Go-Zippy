import { api } from '@http/http-client';
import { Address } from 'src/model/Address';
import { AddAddressRequestDTO } from './dtos/request/AddAddressRequestDTO';

export class AddressService {
  private routes = {
    get: '/addresses',
    post: '/addresses',
  };

  public async getAddresses(): Promise<Address[]> {
    try {
      const response = await api.get(this.routes.get);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async addAddress(address: AddAddressRequestDTO): Promise<Address> {
    try {
      const response = await api.post(this.routes.post, { address });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
