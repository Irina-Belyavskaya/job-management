import { ReactNode } from "react";

import AppHeader from "components/header.component";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}