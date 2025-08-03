import React from "react";

export const QuitButton = () => {
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      <button
        className={"mx-[16px] flex items-center py-[19px]"}>
        <div className={"w-[35px] flex items-center justify-center"}>
          <img src={"/quit-icon.svg"} alt={"Выйти из профиля"}/>
        </div>
        <span className={"text-[20px] ml-[5px] font-normal"}>Выйти из профиля</span>
      </button>
    </div>
  );
};