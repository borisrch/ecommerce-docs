import React from "react";
import Container from "../../src/components/container";
import Head from "../../src/components/head";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

import { docs } from "../../src/docs";
import useContentStyles from "../../src/styles";

const { label, route } = docs[0].children[0];

// TODO: refactor to style from container

function Page({ content, data }) {
  const classes = useContentStyles();

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
      <Container content={<ContentContainer />} label={label} route={route} />
    </React.Fragment>
  );
}

Page.getInitialProps = async (context) => {
  const content = await import("../../src/content/overview.md");
  const data = matter(content.default);
  return { ...data };
};

export default Page;
