/* eslint-disable prettier/prettier */
import { getAllTags } from "/lib/tags";
import React from "react";
export async function getStaticProps() {
  const tags = await getAllTags("blog");

  return { props: { tags } };
}
