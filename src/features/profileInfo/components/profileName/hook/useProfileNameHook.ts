import {useProfileStore} from "@/state/providers/provider-profile";
import moment from "moment/moment";

export const useProfileNameHook = ()=>{
  const {data} = useProfileStore(state => state);

  const {name, role, nickname, last_login_at} = data;
  const currentData: moment.Moment = moment();
  const lastLogin: moment.Moment = moment(last_login_at);

  const lastActive = currentData.diff(lastLogin, "days");

  return {name,role,nickname,lastActive,last_login_at,name}
}