import { Typography } from "@material-ui/core";
import React from "react";
import Container from "../src/components/container";
import Head from "../src/components/head";

const { label } = "ShopCast Documentation";

// TODO: refactor to style from container

function Page() {
  const ContentContainer = () => {
    return (
      <React.Fragment>
        <Typography variant="h4">ShopCast Documentation</Typography>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Head title={label} />
      <Container content={<ContentContainer />} label={label} />
    </React.Fragment>
  );
}

export default Page;
