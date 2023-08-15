import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import React from "react";;

export default function App({ Component, pageProps }: AppProps) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

