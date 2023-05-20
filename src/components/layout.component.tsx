import AppHeader from "app/main/components/header.component";
import { ReactNode } from "react";

export default function Layout({children} : {children: ReactNode}) {
  return (
    <>
      <AppHeader/>
      {children}
    </>
  )
}