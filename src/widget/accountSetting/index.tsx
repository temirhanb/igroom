import {SettingButton} from "@/features";

export const AccountSetting = () => {

  const accountButtons = [
    {
      name: "Публичный аккаунт",
      img: "/public-acc.svg"
    }, {
      name: "Взрослый аккаунт",
      img: "/adult-acc.svg"
    },
  ];
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      {accountButtons.map((item, index) => (
        <SettingButton name={item.name} img={item.img} key={item.name + index}/>
      ))}
    </div>
  );
};