import React from "react";
import Link from "next/link";
import {useFooterHook} from "@/widget/footer/hook/useFooterHook";

export const Footer = () => {

  const {footerLinks} = useFooterHook();
  return (
    <div className={"mt-[20px] px-[30px] py-[10px] flex flex-row justify-between bg-[#e5e5e5]"}>
      {footerLinks.map((item, index) => (
        <Link key={item.src + index} href={item.src}>
          <button

            className={"flex items-center cursor-pointer hover:opacity-75"}>
            <img src={item.img} alt=""/>
          </button>
        </Link>
      ))}
    </div>
  );
};