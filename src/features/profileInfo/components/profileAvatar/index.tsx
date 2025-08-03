import {useProfileStore} from "@/state/providers/provider-profile";

export const ProfileAvatar = () => {
  const {data} = useProfileStore(state => state);

  const {avatar_url, role} = data;
  const imageButton = [
    {
      name: "Это я", img: "/watch-icon.svg"
    }, {
      name: "Котум", img: "/kotum-icon.svg"
    },
  ];

  return (
    <div className={"flex flex-row justify-between"}>
      <div>
        <img src="/left-arow.svg" alt=""/>
      </div>
      <div className={"w-[180px] h-[180px] relative rounded-full bg-[#7F7F7F]"}>
        <div
          className={"w-[40px] font-bold text-[28px] flex items-center justify-center font-bold h-[40px] absolute top-0 left-0 rounded-full bg-[#00CF00]"}>
          <p className={"uppercase"}>
            {role === undefined ? "Р" : role.split("")[0]}
          </p>
        </div>
        <img className={"rounded-full"} src={avatar_url === undefined ? "/user-foto.svg" : avatar_url} alt=""/>
      </div>
      <div className={"mr-[15px] flex flex-col items-center justify-center"}>
        <div className={"mb-[25px] cursor-pointer hover:opacity-75"}><img src="/update-icon.svg" alt=""/></div>
        {imageButton.map((item, index) => (
          <div
            key={index + item.name}
            className={"flex flex-col items-center justify-center text-[#7F7F7F] cursor-pointer hover:opacity-75 font-normal text-[16px] mb-[15px] last:mb-0 justify-center :"}
          >
            <img className={`mt-[3px] ${item.name === "Котум" ?
              "w-[30px] h-[30px]" :
              "w-[36px] h-[20px]"}`
            } src={item.img} alt={item.name}/>
            <span>{item.name.length === 0 ? "Ваня" : item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};