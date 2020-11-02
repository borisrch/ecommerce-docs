import React, { useState } from "react";
import Container from "../../src/components/container";
import Head from "../../src/components/head";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const label = "Overview";

function Page({ content, data }) {
  return (
    <React.Fragment>
      <Head title={label} />
      <Container content={<ReactMarkdown source={content} />} label={label} />
    </React.Fragment>
  );
}

Page.getInitialProps = async (context) => {
  const content = await import("../../src/content/overview.md");
  const data = matter(content.default);
  return { ...data };
};

export default Page;
