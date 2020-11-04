import { Typography } from "@material-ui/core";
import React from "react";
import Container from "../src/components/container";
import Head from "../src/components/head";
import Home from "../src/components/Home/home";

const { label } = "ShopCast Documentation";

// TODO: refactor to style from container

function Page() {
  return (
    <React.Fragment>
      <Head title={label} />
      <Container content={<Home />} label={label} />
    </React.Fragment>
  );
}

export default Page;
