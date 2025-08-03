import {useProfileStore} from "@/state/providers/provider-profile";
import moment from "moment";

export const useProfileStatisticHook = ()=>{
  const {data} = useProfileStore(state => state);

  const {created_at, points, roomersCount} = data;
  const currentData: moment.Moment = moment();
  const lastLogin: moment.Moment = moment(created_at);

  const lastActive = currentData.diff(lastLogin, "days");

  const statisticInfo = [
    {
      count: `${lastActive === undefined ? 12 : lastActive} дней`, name: "в игруме"
    }, {
      count: points === undefined ? 10 : points, name: "встреч"
    }, {
      count: roomersCount === undefined ? "350" : roomersCount, name: "румеров"
    },

  ];
  return {statisticInfo}
}