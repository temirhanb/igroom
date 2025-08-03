import moment from "moment";

import {useProfileStore} from "@/state/providers/provider-profile";

export const ProfileName = () => {
  const {data} = useProfileStore(state => state);

  const {name, role, nickname, last_login_at} = data;
  const currentData: moment.Moment = moment();
  const lastLogin: moment.Moment = moment(last_login_at);

  const lastActive = currentData.diff(lastLogin, "days");

  return (
    <>
      <div className={"flex justify-center leading-[28px] text-[22px] h-[auto] items-end"}>
        <p className={"mr-[5px]"}>{role === undefined ? "roomer" : role}:</p>
        <span className={"font-bold leading-[34px] text-[28px]"}> {name === undefined ? "Вася" : name}</span>
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