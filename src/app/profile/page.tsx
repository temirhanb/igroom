"use client";

import React from "react";
import {HeaderProfile, ProfileInfo} from "@/widget";
import {History} from "@/widget/history";
import {AccountSetting} from "@/widget/accountSetting";
import {Follows} from "@/widget/follows";
import {Contact} from "@/widget/contact";
import {Learn} from "@/widget/learn";
import {QuitButton} from "@/widget/quit";
import {Footer} from "@/widget/footer";
import {Invites} from "@/widget/Invites";
import {CreateIgroom} from "@/widget/createIgroom";
import {ProfileStoreProvider} from "@/state/providers/provider-profile";

export default function ProfilePage() {

  return (
    <ProfileStoreProvider>
      <div className={"bg-[#eeeeee] flex flex-col  "}>
        <HeaderProfile/>
        <div className={"px-[10px]"}>
          <ProfileInfo/>
          <Invites/>
          <CreateIgroom/>
          <History/>
          <AccountSetting/>
          <Follows/>
          <Contact/>
          <Learn/>
          <QuitButton/>
        </div>
        <Footer/>
      </div>
    </ProfileStoreProvider>

  );
}