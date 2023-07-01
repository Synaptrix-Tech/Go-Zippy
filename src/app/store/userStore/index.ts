import { create } from 'zustand';

type UserStateType = {
  token: string;
};

type UserActionsType = {
  update: (token: string) => void;
  reset: () => void;
};

const useUserStore = create<UserStateType & UserActionsType>((set) => ({
  token: '',
  update: (token) => set({ token }),
  reset: () => set({ token: '' }),
}));

export { useUserStore, UserStateType, UserActionsType };
