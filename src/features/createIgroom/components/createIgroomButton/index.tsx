import React from "react";

interface IProps {
  item: string;
  index: number;
}

export const CreateIgroomButton: React.FC<IProps> = ({item, index}) => {

  return (
    <button key={index + item}
            className={"py-[16px] rounded-t-[20px] last:rounded-b-[20px] first:bg-[#9500FF] text-white last:bg-white last:text-[#9500FF]"}>
      <span className={"uppercase font-bold text-[22px]"}>{item}</span>
    </button>
  );
};