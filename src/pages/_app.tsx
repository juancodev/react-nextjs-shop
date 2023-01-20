import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/containers/Layout';
import Header from '@/components/Header';
import AppContext from '@/context/AppContext';
import useInitialState from '@/hooks/useInitialState';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout className={openSans.className}>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
