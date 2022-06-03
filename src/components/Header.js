// @ts-nocheck
import React from "react"
import { Link } from "gatsby"

import { HeaderStyles } from "./styles"

export default function Header() {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  )
}
