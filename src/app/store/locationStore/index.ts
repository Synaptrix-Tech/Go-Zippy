import { Address } from 'src/model/Address';
import { create } from 'zustand';

type LocationStateType = {
  selectedAddress: Address;
};

type LocationActionsType = {
  update: (address: Address) => void;
  reset: () => void;
};

const useLocationStore = create<LocationStateType & LocationActionsType>(
  (set) => ({
    selectedAddress: {} as Address,
    update: (selectedAddress) => set({ selectedAddress }),
    reset: () => set({ selectedAddress: {} as Address }),
  })
);

export { useLocationStore, LocationStateType, LocationActionsType };
