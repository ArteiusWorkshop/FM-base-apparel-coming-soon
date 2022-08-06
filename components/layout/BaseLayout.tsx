import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const BaseLayout: FC<Props> = ({
  title = "FFrontend Mentor - Base Apparel coming soon page solution",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="og:title" content={title} />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.jpg`}
        />
      </Head>

      <main>{children}</main>
    </>
  );
};
