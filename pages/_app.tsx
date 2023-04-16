import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { register } from 'swiper/element/bundle';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    register()
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
