import {HeaderProfile, ProfileInfo} from "@/widget";
import {Rooms} from "@/widget/rooms";
import {History} from "@/widget/history";
import {AccountSetting} from "@/widget/accountSetting";
import {Follows} from "@/widget/follows";
import {Contact} from "@/widget/contact";
import {Learn} from "@/widget/learn";
import {QuitButton} from "@/widget/quit";
import React from "react";
import {Footer} from "@/widget/footer";

export default function ProfilePage() {


  return (
    <div className={"bg-[#eeeeee] flex flex-col  px-[10px]"}>
      <HeaderProfile/>
      <ProfileInfo/>
      <Rooms/>
      <History/>
      <AccountSetting/>
      <Follows/>
      <Contact/>
      <Learn/>
      <QuitButton/>
      <Footer/>
    </div>);
}