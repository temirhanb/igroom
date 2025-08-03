import {useProfileStore} from "@/state/providers/provider-profile";
import {useEffect} from "react";

export const useHeaderProfileHook = ()=>{
  const { fetch} = useProfileStore(state => state);

  useEffect(() => {
    fetch().then();
  }, []);
}