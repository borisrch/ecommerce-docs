import React, { useState } from "react";
import Container from "../../src/components/container";
import Head from "../../src/components/head";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const label = "Overview";

// TODO: refactor to style from container
const useStyles = makeStyles({
  root: {
    paddingLeft: "5%",
    paddingRight: "5%",
    color: "#333",
    "& h1": {
      color: "green",
    },
    "& img": {
      width: "100%",
      textAlign: "center",
      padding: "5%",
    },
    "& code": {
      backgroundColor: "#edf1fb",
      color: "#1976d2",
      padding: "4px 8px",
      borderRadius: "4px",
    },
    "& p": {
      lineHeight: "2.5em",
      textAlign: "justify",
    },
  },
});

function Page({ content, data }) {
  const classes = useStyles();

  const ContentContainer = () => {
    return (
      <React.Fragment>
        <ReactMarkdown source={content} className={classes.root} />
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

Page.getInitialProps = async (context) => {
  const content = await import("../../src/content/overview.md");
  const data = matter(content.default);
  return { ...data };
};

export default Page;
