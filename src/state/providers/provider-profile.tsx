"use client";

import {createContext, type ReactNode, useContext, useRef} from "react";
import {useStore} from "zustand";
import {createProfileStore, type ProfileStore} from "@/state/stores/profile-store";

export type ProfileStoreApi = ReturnType<typeof createProfileStore>

export const ProfileStoreContext = createContext<ProfileStoreApi | undefined>(
  undefined,
);

export interface ProfileStoreProviderProps {
  children: ReactNode;
}

export const ProfileStoreProvider = ({
                                       children,
                                     }: ProfileStoreProviderProps) => {
  const storeRef = useRef<ProfileStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createProfileStore();
  }

  return (

    <ProfileStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileStoreContext.Provider>
  );
};

export const useProfileStore = <T, >(
  selector: (store: ProfileStore) => T,
): T => {
  const profileStoreContext = useContext(ProfileStoreContext);
  if (!profileStoreContext) {
    throw new Error(`useProfile must be used within ProfileStoreProvider`);
  }

  return useStore(profileStoreContext, selector);
};
