import React, { useEffect, useState } from 'react';
import { HomeLayout } from './layout';
import { AddressService } from '@services/Address';
import { Address } from 'src/model/Address';
import { loadingStates, loadingStatesEnum } from '@ts/loading';
import { useLocationStore } from '@store/locationStore';

export const Home = () => {
  const addressService = new AddressService();
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [requestState, setRequestState] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );
  const { update, selectedAddress } = useLocationStore();

  const getAddress = async () => {
    try {
      setRequestState(loadingStatesEnum.PENDING);
      const address = await addressService.getAddresses();

      const selected = address.find((address) => address.selected);
      update(selected || ({} as Address));
      setAddressList(address);
      setRequestState(loadingStatesEnum.DONE);
    } catch (e) {
      console.log(e);
      setRequestState(loadingStatesEnum.ERROR);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <HomeLayout
      addressList={addressList}
      selectedAddress={selectedAddress}
      requestState={requestState}
    ></HomeLayout>
  );
};
