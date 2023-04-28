import Head from "next/head";
import { ReactNode } from "react";
import { PageMetaData } from "../types";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
  pageMetaData: PageMetaData;
};

const Layout = ( { children, pageMetaData  } : LayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageMetaData?.pageTitle}</title>
        <meta name="description" content={pageMetaData?.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
