import {useProfileStore} from "@/state/providers/provider-profile";

export const useDescriptionHook = ()=>{
  const {data: {about}} = useProfileStore(state => state);

  return{about}
}