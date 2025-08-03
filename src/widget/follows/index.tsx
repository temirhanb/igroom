import {FollowButton} from "@/features";

export const Follows = () => {
  const followsButtons = [
    {
      name: "Мои подписки",
      img: "/subscribe-icon.svg"
    },
    {
      name: "Черный список",
      img: "/blacklist-icon.svg"
    }, {
      name: "Закладки",
      img: "/bookmarks-icon.svg"
    },
  ];
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      {followsButtons.map((item, index) => (
        <FollowButton key={item.name + index} name={item.name} img={item.img}/>
      ))}
    </div>
  );
};