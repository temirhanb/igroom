import {useProfileStore} from "@/state/providers/provider-profile";
import moment from "moment/moment";

export const ProfileStatistic = () => {

  const {data} = useProfileStore(state => state);

  const {created_at, points} = data;
  const currentData: moment.Moment = moment();
  const lastLogin: moment.Moment = moment(created_at);

  const lastActive = currentData.diff(lastLogin, "days");

  const statisticInfo = [
    {
      count: `${lastActive === undefined ? 12 : lastActive} дней`, name: "в игруме"
    }, {
      count: points === undefined ? 10 : points, name: "встреч"
    }, {
      count: "350", name: "румеров"
    },

  ];
  return (
    <div className={"flex flex-row justify-evenly items-center h-[48PX]"}>
      {statisticInfo.map((item, index) => (
        <div
          key={index + item.name}
          className={"flex flex-col last:border-l w-full first:border-r  font-normal  text-[#434343] text-[17px] h-[40px] items-center"}
        >
          <span className={"font-bold leading-[22px] text-[24px]"}>{item.count}</span>
          <span className={"font-normal leading-[22px] text-[18px]"}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};