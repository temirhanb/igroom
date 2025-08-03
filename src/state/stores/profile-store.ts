// src/stores/counter-store.ts
import {createStore} from "zustand/vanilla";
import axios from "axios";

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
  roomersCount: number,
  last_login_at: string,
  created_at: string,
  updated_at: string
}
export type ProfileState = {
  data: TProfile
}

export type ProfileActions = {
  fetch: () => Promise<void>
}

export type ProfileStore = ProfileState & ProfileActions

export const defaultInitState: ProfileState = {
  data: {} as TProfile,
};

export const createProfileStore = (
  initState: ProfileState = defaultInitState,
) => {
  return createStore<ProfileStore>()((set) => ({
    ...initState,
    fetch: async () => {

      const {data} = await axios.get("https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591");

      const profileAddInfo: { data: [{ avatar: string, roomersCount: number }] } = await axios.get("https://5f65baa743662800168e6ed8.mockapi.io/profile");

      const result = await data;
      set({
        data: {
          ...result.data,
          avatar_url: profileAddInfo.data[0].avatar,
          roomersCount: profileAddInfo.data[0].roomersCount
        }
      });
    },
  }));
};