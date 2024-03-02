import About from "@/src/components/About";
import Advisor from "@/src/components/Advisor";
import Homepage from "@/src/components/Homepage";
import InfiniteSlider from "@/src/components/InfiniteSlider";
import MainLayout from "@/src/layout/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Outfit"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logos/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/logos/favicon-16x16.png"
          ></link>
          <title>SHAGA</title>
        </Head>
        <Homepage />
        {/* <InfiniteSlider /> */}
        <About />
        <Advisor />
      </MainLayout>
    </>
  );
}
