import { ReactElement } from "react";
import Page from "../components/Page";
import type { AppProps, AppContext } from 'next/app';


export default function TravelApp({Component, pageProps}: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}