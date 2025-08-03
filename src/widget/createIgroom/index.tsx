import {CreateIgroomButton} from "@/features";
import {useCreateIgroomHook} from "@/widget/createIgroom/hook/useCreateIgroomHook";

export const CreateIgroom = () => {
  const {buttons} = useCreateIgroomHook();
  return (
    <div className={"mt-[20px] border-[4px] border-[#9500FF] flex flex-col rounded-[25px]"}>
      {buttons.map((item, index) => (
        <CreateIgroomButton key={index + item} item={item} index={index}/>
      ))}
    </div>
  );
};