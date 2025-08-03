// src/stores/counter-store.ts
import {create} from "zustand/react";
import {createStore} from "zustand/vanilla";

export type TProfile = {
  id: string,
  role: string,
  name: string,
  nickname: string,
  avatar_url: string,
  age: number,
  city: {
    id: string,
    name: string
  },
  is_private: boolean,
  telegram: string,
  about: string,
  points: number,
  calling_limit: number,
  going_limit: number,
  account_status: string,
  last_login_at: string,
  created_at: string,
  updated_at: string
}
export type ProfileState = {
  data: TProfile
}

export type ProfileActions = {
  fetch: (aaa: any) => void
}

export type ProfileStore = ProfileState & ProfileActions

export const defaultInitState: ProfileState = {
  data: {} as TProfile,
};

export const createProfileStore = createStore<ProfileState>()((set) => ({
  ...defaultInitState,
  fetch: async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    set({ data: result });
  },
}));
