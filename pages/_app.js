import "@/styles/globals.css";
import Layout from "./layout/Layout.js";
import { Fragment } from "react";
import Head from "next/head.js";
import { NotificationContextProvider } from "@/store/notification-context.js";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>All Events</title>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve..."
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
