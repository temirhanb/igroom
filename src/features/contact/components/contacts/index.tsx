import {useContactsHook} from "@/features/contact/hook/useContactsHook";

export const Contacts = () => {
  const {telegram} = useContactsHook();
  return (
    <div
      className={"mx-[16px] text-[17px] border-t border-[#00000033] h-[60px] flex flex-row items-center justify-between"}>
      <span>Мой телеграм</span>
      <span className={"font-semibold"}>@{telegram === undefined ? "ribakit3" : telegram}</span>
    </div>
  );
};