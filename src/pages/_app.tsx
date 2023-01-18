import type { AppProps } from "next/app";
import Header from "@/components/Header";
import AppContext from "@/context/AppContext";
import useInitialState from "@/hooks/useInitialState";

export default function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
