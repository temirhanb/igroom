import {FollowButton} from "@/features";
import {useFollowsHook} from "@/widget/follows/hook/useFollowsHook";

export const Follows = () => {
  const {followsButtons} = useFollowsHook();
  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      {followsButtons.map((item, index) => (
        <FollowButton key={item.name + index} name={item.name} img={item.img}/>
      ))}
    </div>
  );
};