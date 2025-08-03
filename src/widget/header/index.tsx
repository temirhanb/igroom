import {useHeaderProfileHook} from "@/widget/header/hook";

export const HeaderProfile = () => {
  useHeaderProfileHook();

  return (
    <header
      className={"h-[48px] flex flex-row justify-between items-center pt-[6px] pl-[21px] pr-[16px] text-[#7F7F7F] bg-[#E5E5E5]"}>
      <h1 className={"text-[28px] font-normal"}>Профиль</h1>
      <button>
        <img src="/menu-icon.svg" className={"cursor-pointer hover:opacity-75"} alt="menu icon"/>
      </button>
    </header>
  );
};