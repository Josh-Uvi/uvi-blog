import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { LayoutStyles } from "./styles"

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}
