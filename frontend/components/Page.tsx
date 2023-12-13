import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

type PageProps = {
  children: ReactNode;
};

const GlobalStyles = createGlobalStyle`

  html {
    --black: #393939;
    box-sizing: border-box;
    font-size: .69vw;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    font-family: "area-normal", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    background-color: #FEFAEF;
  }

  a {
    text-decoration: none;
    color: var(---black);
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  main {
    padding-top: 8rem;
  }

`;

const PageWrapperStyles = styled.div`
  padding-left: 7rem;
  padding-right: 7rem;
`;

export default function Page({ children }: PageProps) {
  return (
    <div>
      <GlobalStyles />

      <PageWrapperStyles>
        <Header />
        <main>{children}</main>
      </PageWrapperStyles>
    </div>
  );
}
