export const RoomsInvites = () => {
  const invites = [
    {
      id: 123,
      name: "Зовы",
      status: "ready",
      count: 7
    },
    {
      id: 1123,
      name: "Иду",
      status: "pending",
      count: 5
    },
  ];
  return (
    <div className={"p-[16px] bg-white rounded-[25px] mt-[20px]"}>
      {invites.map(item => (
        <div
          className={"first:border-b first:border-[#00000033]  flex justify-between items-center flex-row first:pb-[18px] last:pt-[18px]"}>
          <div
            className={`rounded-full w-[13px] h-[13px] ${item.status === "ready" ? "bg-[#00CF00]" : "bg-[#FFA100]"}`}/>
          <div className={"grow-1 flex flex-row justify-between items-center mx-[18px]"}>
            <span className={"text-[20px] font-semibold uppercase text-[#434343]"}>{item.name}</span>
            <div
              className={`w-[28px] h-[28px] text-center flex items-center justify-center rounded-full bg-[#D0D0D0] `}
            >
              <span className={"text-[#434343] text-[22px] font-bold"}>
                {item.count}
              </span>
            </div>
          </div>
          <img src="/bottom-arrow.svg" className={"h-[18px] w-[31px]"} alt="arrow bottom"/>
        </div>
      ))}
    </div>
  );
};