import Head from "next/head";

const HeadComponent = (props) => {
  let pageTitle;

  if (props.title == undefined) {
    pageTitle = "ShopCast Docs";
  } else {
    pageTitle = `${props.title} | ShopCast Docs`;
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadComponent;
