export const Contact = () => {

  return (<div className={"mt-[20px] rounded-[25px] bg-white flex flex-col"}>
    <div
      className={"p-[16px]"}
    >
      <div
        className={"text-[17px] relative font-normal leading-[22px]"}
      >Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с друзьями по вечера в Сицилии и зовем всех
        желающ и разные другие дела...
        <img className={"absolute right-0 pointer bottom-0"} src="/next-text.svg" alt="full text"/>
      </div>
    </div>

    <div
      className={"mx-[16px] text-[17px] border-t border-[#00000033] h-[60px] flex flex-row items-center justify-between"}>
      <span>Мой телеграм</span>
      <span className={"font-semibold"}>@ribakit3</span>
    </div>
  </div>);
};