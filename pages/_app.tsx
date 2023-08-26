import Layout from "@/components/layout/Layout";
import AppointmentContext, {
  AppointmentCreateContext, setPhoneNumberContext,
} from "@/context/appointment/LoginContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect } from "react";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppointmentContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppointmentContext>
  );
}
