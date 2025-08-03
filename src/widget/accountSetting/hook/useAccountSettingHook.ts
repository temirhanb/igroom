export const useAccountSettingHook = ()=>{
  const accountButtons = [
    {
      name: "Публичный аккаунт",
      img: "/public-acc.svg"
    }, {
      name: "Взрослый аккаунт",
      img: "/adult-acc.svg"
    },
  ];
  return {accountButtons}
}