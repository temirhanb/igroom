export const ProfileStatistic = () => {

  const statisticInfo = [
    {
      count: "1 месяц", name: "в игруме"
    }, {
      count: "15", name: "ввстреч"
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