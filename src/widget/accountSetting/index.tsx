import {SettingButton} from "@/features";
import {useAccountSettingHook} from "@/widget/accountSetting/hook/useAccountSettingHook";

export const AccountSetting = () => {

  const {accountButtons} = useAccountSettingHook();
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      {accountButtons.map((item, index) => (
        <SettingButton name={item.name} img={item.img} key={item.name + index}/>
      ))}
    </div>
  );
};