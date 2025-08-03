import React from "react";

interface IProps {
  role: string,
  avatar_url: string
}

export const AvatarContainer: React.FC<IProps> = ({role, avatar_url}) => {
  return (
    <div className={"w-[180px] h-[180px] relative rounded-full bg-[#7F7F7F]"}>
      <div
        className={"w-[40px] font-bold text-[28px] flex items-center justify-center font-bold h-[40px] absolute top-0 left-0 rounded-full bg-[#00CF00]"}>
        <p className={"uppercase"}>
          {role === undefined ? "Р" : role.split("")[0]}
        </p>
      </div>
      <img className={"rounded-full"} src={avatar_url === undefined ? "/user-foto.svg" : avatar_url} alt=""/>
    </div>
  );
};