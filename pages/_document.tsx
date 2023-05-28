import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Pokemon Static 2.0</title>
          {CssBaseline.flush()}
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;