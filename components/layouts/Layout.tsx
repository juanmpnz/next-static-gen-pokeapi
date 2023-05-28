import React from "react";
import Head from "next/head";
import { LayoutProps } from "@/interfaces";
import { NavBar } from "../ui";

const origin = (typeof window === undefined) ? "" : window.location.origin
export const Layout = ({ children, titleTag }: LayoutProps) => {
 console.log(origin)

  return (
    <>
      <Head>
        <title>{titleTag || "Pokemon app"}</title>
        <meta name="author" content="Juan Panzitta" />
        <meta name="description" content={`Info sobre el Pokemon ${titleTag}`} />
        <meta name="keywords" content="pokemon, next, seo, test" />
        <meta name="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar/>
      <main className="container_app">{children}</main>
    </>
  );
};
