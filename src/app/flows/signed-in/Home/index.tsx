import React, { useState } from 'react';
import { HomeLayout } from './layout';
import { AddressService } from '@services/Address';
import { Address } from 'src/model/Address';
import { loadingStates, loadingStatesEnum } from '@ts/loading';

export const Home = () => {
  const addressService = new AddressService();
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [requestState, setRequestState] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const getAddress = async () => {
    try {
      setRequestState(loadingStatesEnum.PENDING);
      const address = await addressService.getAddresses();
      setAddressList(address);
      setRequestState(loadingStatesEnum.DONE);
    } catch (e) {
      console.log(e);
      setRequestState(loadingStatesEnum.ERROR);
    }
  };

  const selectedAddress = addressList.find((a) => a.selected === true);

  return (
    <HomeLayout
      addressList={addressList}
      selectedAddress={selectedAddress}
      getAddress={getAddress}
      requestState={requestState}
    ></HomeLayout>
  );
};
