import React from "react";
import {redirect, RedirectType} from "next/navigation";

export default function Home() {

  redirect("/profile", RedirectType.replace);
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}
