import {useProfileStore} from "@/state/providers/provider-profile";

export const ProfileButtons = () => {

  const {data} = useProfileStore(state => state);

  const {city} = data;

  return (
    <div className={"mt-[18px] flex flex-row justify-between"}>
      <button
        className={"bg-white rounded-[25px] h-[60px] w-[236px]"}
      >
        <span className={"leading-[28px] text-[22px] text-[#434343] font-normal"}>{city?.name=== undefined?'Краснодар':city.name}</span>
      </button>
      <button
        className={"rounded-[25px] cursor-pointer hover:opacity-75 border-[3px] text-[#A7A7A7] border-[#A7A7A7] bg-white h-[60px] w-[122px] flex items-center"}>
        <img className={"ml-[13px] mr-[3px]"} src="/setting-edit.svg" alt="edit"/>
        <span>РЕДАКТ</span></button>
    </div>
  );
};