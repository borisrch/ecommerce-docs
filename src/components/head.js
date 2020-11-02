import Head from "next/head";

const HeadComponent = (props) => {
  return (
    <Head>
      <title>{props.title} | ShopCast Docs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadComponent;
