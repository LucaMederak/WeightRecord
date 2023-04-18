import React from "react";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

//styles
import { GlobalStyle } from "@/theme/globalStyle";

//layout
import Layout from "@/layout/Layout";

//context
import { DarkModeProvider } from "@/context/DarkMode";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WeightRecord</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Dodawaj pomiary i generuj raporty w WeightRecord."
        />
        <link rel="icon" href="/logo-icon.svg" />
      </Head>
      <main className={inter.className}>
        <GlobalStyle />
        <DarkModeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DarkModeProvider>
      </main>
    </>
  );
}
