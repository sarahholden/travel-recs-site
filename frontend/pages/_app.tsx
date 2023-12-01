import Page from "../components/Page";


export default function TravelApp({Component, pageProps}: any) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}