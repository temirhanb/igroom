import React from "react";

export const LearnButton = ({item}: { item: string }) => {

  return (<button
    className={"mx-[16px] first:border-none border-t border-[#00000033] flex items-center py-[19px]"}>
    <div className={"w-[10px] h-[10px] rounded-full bg-[#A7A7A7] mx-[15px]"}/>
    <span className={"text-[20px] ml-[5px] font-normal"}>{item}</span>
  </button>)
};