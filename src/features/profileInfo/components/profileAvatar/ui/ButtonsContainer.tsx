import React from "react";

interface IProps {
  imageButton: Array<{ name: string, img: string }>;
}

export const ButtonsContainer: React.FC<IProps> = ({imageButton}) => {
  return <div className={"mr-[15px] flex flex-col items-center justify-center"}>
    <button className={"mb-[25px] cursor-pointer hover:opacity-75"}><img src="/update-icon.svg" alt=""/></button>
    {imageButton.map((item, index) => (
      <button
        key={index + item.name}
        className={"flex flex-col items-center justify-center text-[#7F7F7F] cursor-pointer hover:opacity-75 font-normal text-[16px] mb-[15px] last:mb-0 justify-center :"}
      >
        <img className={`mt-[3px] ${item.name === "Котум" ?
          "w-[30px] h-[30px]" :
          "w-[36px] h-[20px]"}`
        } src={item.img} alt={item.name}/>
        <span>{item.name.length === 0 ? "Ваня" : item.name}</span>
      </button>
    ))}
  </div>;
};