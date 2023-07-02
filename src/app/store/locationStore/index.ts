import { create } from 'zustand';

type LocationStateType = {
  address: string;
};

type LocationActionsType = {
  update: (address: string) => void;
  reset: () => void;
};

const useLocationStore = create<LocationStateType & LocationActionsType>(
  (set) => ({
    address: '',
    update: (address) => set({ address }),
    reset: () => set({ address: '' }),
  })
);

export { useLocationStore, LocationStateType, LocationActionsType };
