import React from "react";
import Link from "next/link";

export const Footer = () => {

  const footerLinks = [
    {
      src: "/profile",
      img: "/footer/home-page.svg"
    },
    {
      src: "/profile",
      img: "/footer/messenger-icon.svg"
    },
    {
      src: "/profile",
      img: "/footer/browser-icon.svg"
    },
    {
      src: "/profile",
      img: "/footer/notification-icon.svg"
    },
    {
      src: "/profile",
      img: "/footer/user-icon.svg"
    },

  ];
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