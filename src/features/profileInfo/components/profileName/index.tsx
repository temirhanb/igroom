import moment from "moment";
import {useProfileNameHook} from "@/features/profileInfo/components/profileName/hook/useProfileNameHook";

export const ProfileName = () => {

  const {role, nickname, lastActive, last_login_at, nameUser} = useProfileNameHook();

  return (
    <>
      <div className={"flex justify-center leading-[28px] text-[22px] h-[auto] items-end"}>
        <p className={"mr-[5px]"}>{role === undefined ? "roomer" : role}:</p>
        <span className={"font-bold leading-[34px] text-[28px]"}> {nameUser === undefined ? "Вася" : nameUser}</span>
      </div>
      <div
        className={"flex font-normal justify-evenly text-[#434343] text-[17px] h-[40px] items-center"}>
        <span>@{nickname === undefined ? "nickUser1" : nickname}</span>
        <span>{
          lastActive === 0 ? `Сегодня в ${moment(last_login_at).format("HH:mm")}` :
            lastActive === 1 ? `Вчера в ${moment(last_login_at).format("HH:mm")}` :
              `Недавно ${moment(last_login_at).format("DD.MM HH:mm")}`
        }</span>
      </div>
    </>
  );
};