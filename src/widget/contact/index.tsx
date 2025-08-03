import {Contacts, Description} from "@/features";

export const Contact = () => {

  return (
    <div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
      <Description/>
      <Contacts/>
    </div>
  );
};