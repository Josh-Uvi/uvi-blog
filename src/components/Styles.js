import styled from "styled-components"

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
const FooterStyles = styled.footer`
  text-align: center;
  padding: 1rem;
`

const HeaderStyles = styled.header`
  nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    @media (min-width: 768px) {
      grid-template-columns: 1fr repeat(3, auto);
    }
  }

  nav ul li a {
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: black;
  }
`

export { LayoutStyles, FooterStyles, HeaderStyles }
