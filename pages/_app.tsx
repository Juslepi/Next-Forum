import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";

import { UserProvider } from "../context/userContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
