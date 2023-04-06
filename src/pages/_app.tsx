import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/layout";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/niz4gnx.css" />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;