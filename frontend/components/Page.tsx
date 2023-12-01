import { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

type PageProps = {
  children: ReactNode;
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: sans-serif;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --black: #393939;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(---black);
  }

  a:hover {
    text-decoration: underline;
  }

`;

export default function Page({children}: PageProps) {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      {children}
    </div>
  )
}