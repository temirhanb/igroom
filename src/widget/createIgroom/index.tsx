import {CreateIgroomButton} from "@/features";

export const CreateIgroom = () => {

  const buttons = ["Создать игрум", "Мои игрумы"];
  return (
    <div className={"mt-[20px] border-[4px] border-[#9500FF] flex flex-col rounded-[25px]"}>
      {buttons.map((item, index) => (
        <CreateIgroomButton item={item} index={index}/>
      ))}
    </div>
  );
};