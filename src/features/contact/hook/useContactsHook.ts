import {useProfileStore} from "@/state/providers/provider-profile";

export const useContactsHook = ()=>{
  const {data} = useProfileStore(state => state);
  const {telegram} = data;

  return{telegram}
}