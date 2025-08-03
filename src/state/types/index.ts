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