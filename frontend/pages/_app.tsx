import { ReactElement } from "react";
import Page from "../components/Page";
import type { AppProps, AppContext } from 'next/app';
import { NextPageContext } from 'next';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';


type ApolloProps = {
  apollo: ApolloClient<any>;
};
type ApolloAppProps = ApolloProps & AppProps;


function TravelApp({Component, pageProps, apollo}: ApolloAppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

type MyAppProps = AppContext & NextPageContext;

TravelApp.getInitialProps = async function({Component, ctx}: MyAppProps) {
  let pageProps: { query?: NextPageContext['query'] } = {}
  
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query;

  return { pageProps }

}


export default withData(TravelApp)