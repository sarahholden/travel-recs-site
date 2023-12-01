import Document, { Html, Head, NextScript, Main, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// TODO: Fix this type error
class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const {renderPage} = ctx;
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en-ZA">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;