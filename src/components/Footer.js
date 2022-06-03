import React from "react"
import { FooterStyles } from "./styles"

export default function Footer() {
  return (
    <FooterStyles>
      Uvi media {new Date().getFullYear()}, (c) all right reserved.
    </FooterStyles>
  )
}
