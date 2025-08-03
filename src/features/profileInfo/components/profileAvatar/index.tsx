import {useProfileAvatarHook} from "@/features/profileInfo/components/profileAvatar/hook/useProfileAvatarHook";
import {AvatarContainer} from "@/features/profileInfo/components/profileAvatar/ui/AvatarContainer";
import {ButtonsContainer} from "@/features/profileInfo/components/profileAvatar/ui/ButtonsContainer";

export const ProfileAvatar = () => {
  const {role, avatar_url, imageButton} = useProfileAvatarHook();

  return (
    <div className={"flex flex-row justify-between"}>
      <div>
        <img src="/left-arow.svg" alt=""/>
      </div>
      <AvatarContainer avatar_url={avatar_url} role={role}/>
      <ButtonsContainer imageButton={imageButton}/>
    </div>
  );
};