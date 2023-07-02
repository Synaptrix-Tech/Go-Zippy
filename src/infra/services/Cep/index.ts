import { formatAddress } from '@utils/formatAddress';
import { GetCepResponseDTO } from './dtos/response/GetCepResponseDTO';

export class CepService {
  private routes = {
    cep: 'https://viacep.com.br/ws/:cep/json/',
  };

  public async getCep(cep: string): Promise<string> {
    const url = this.routes.cep.replace(':cep', cep);
    const response = await fetch(url);
    const data = (await response.json()) as GetCepResponseDTO;

    const formattedAddress = formatAddress({
      city: data.localidade,
      country: 'Brasil',
      district: data.uf,
      name: '',
      postalCode: data.cep,
      region: data.bairro,
      street: data.logradouro,
      streetNumber: data.complemento,
      isoCountryCode: null,
      subregion: null,
      timezone: null,
    });

    return formattedAddress;
  }
}
