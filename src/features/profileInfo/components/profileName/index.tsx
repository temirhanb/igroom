export const ProfileName = () => {
  return (
    <>
      <div className={"flex justify-center leading-[28px] text-[22px] h-[54px] items-center"}>
        <p>Румер: <span className={"font-bold leading-[34px] text-[28px]"}>Ваня Петькин</span></p>
      </div>
      <div
        className={"flex font-normal justify-evenly text-[#434343] text-[17px] h-[40px] items-center"}>
        <span>@nickname</span>
        <span>Вчера 18.00</span>
      </div>
    </>
  );
};