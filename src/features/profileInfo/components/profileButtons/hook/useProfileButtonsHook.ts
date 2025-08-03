import {useProfileStore} from "@/state/providers/provider-profile";

export const useProfileButtonsHook = ()=>{
  const {data} = useProfileStore(state => state);

  const {city} = data;

  return {city}
}