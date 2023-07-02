import React from 'react';
import { HomeLayout } from './layout';
import { useLocationStore } from '@store/locationStore';

export const Home = () => {
  const { address } = useLocationStore();
  return <HomeLayout address={address}></HomeLayout>;
};
