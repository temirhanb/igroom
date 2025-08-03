import {useProfileStore} from "@/state/providers/provider-profile";

export const useProfileAvatarHook = ()=>{
  const {data} = useProfileStore(state => state);

  const {avatar_url, role} = data;
  const imageButton = [
    {
      name: "Это я", img: "/watch-icon.svg"
    }, {
      name: "Котум", img: "/kotum-icon.svg"
    },
  ];
  return{
    avatar_url,role,imageButton
  }
}