export const ProfileAvatar = () => {

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
      <div>
        <img src="/user-foto.svg" alt=""/>
      </div>
      <div className={"mr-[15px] flex flex-col items-center justify-center"}>
        <div className={"mb-[25px]"}><img src="/update-icon.svg" alt=""/></div>
        {imageButton.map((item, index) => (
          <div
            key={index + item.name}
            className={"flex flex-col items-center justify-center text-[#7F7F7F] font-normal text-[16px] mb-[15px] last:mb-0 justify-center :"}
          >
            <img className={`mt-[3px] ${item.name === "Котум" ?
              "w-[30px] h-[30px]" :
              "w-[36px] h-[20px]"}`
            } src={item.img} alt={item.name}/>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};