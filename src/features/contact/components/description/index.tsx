import {useProfileStore} from "@/state/providers/provider-profile";

export const Description = () => {
  const {data: {about}} = useProfileStore(state => state);

  return (
    <div
      className={"p-[16px]"}
    >
      <div
        className={"text-[17px] relative font-normal leading-[22px] line-clamp-3"}
      >{about === undefined ?
        "Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с друзьями по вечера в Сицилии и зовем всехжелающ и разные другие дела"
        : about}
        <img className={"absolute right-0 pointer bottom-0"} src="/next-text.svg" alt="full text"/>
      </div>
    </div>
  );
};