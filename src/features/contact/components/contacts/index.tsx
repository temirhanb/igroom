import {useProfileStore} from "@/state/providers/provider-profile";

export const Contacts = () => {
  const {data: {telegram}} = useProfileStore(state => state);

  return (
    <div
      className={"mx-[16px] text-[17px] border-t border-[#00000033] h-[60px] flex flex-row items-center justify-between"}>
      <span>Мой телеграм</span>
      <span className={"font-semibold"}>{telegram === undefined ? "@ribakit3" : telegram}</span>
    </div>
  );
};