import React from "react";
import {LearnButton} from "@/features";
import {useLearnHook} from "@/widget/learn/hook/useLearnHook";

export const Learn = () => {

  const {learnItems} = useLearnHook();
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      {learnItems.map((item, index) => (
        <LearnButton item={item} key={item + index}/>
      ))}
    </div>
  );
};