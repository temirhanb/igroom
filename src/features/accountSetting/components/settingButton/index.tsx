import React from "react";

interface IProps {
  img: string;
  name: string;
}

export const SettingButton: React.FC<IProps> = ({
                                                  name,
                                                  img
                                                }) => {
  return (
    <button className={"mx-[16px]  first:border-none border-t border-[#00000033] flex items-center py-[19px]"}>
      <div className={"w-[35px] flex items-center justify-center"}>
        <img src={img} alt={name}/>
      </div>
      <span className={"text-[20px] ml-[5px] font-normal"}>{name}</span>
    </button>
  );
};