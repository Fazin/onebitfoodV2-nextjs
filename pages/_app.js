import "../styles/globals.scss";
import Header from "../components/Header";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Container className="mt-6">
        <RecoilRoot> <Component {...pageProps} /></RecoilRoot>
        </Container>
      </main>
    </>
  );
}

export default MyApp;
