import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import Head from "next/head";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Typekit (Adobe Fonts): establish connections early so the font
            stylesheet request isn't waiting on DNS/TLS mid-render. */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/niz4gnx.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
