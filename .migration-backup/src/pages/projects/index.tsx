import { NextPage } from "next";
import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Jordan Kozmary</title>
      </Head>
      <Heading
        fontWeight="700"
        color="brand.oxblood"
        mb="4"
        pb="6"
        as="h1"
      >
        Side Projects of Mine
      </Heading>
      <Text>Coming soon!</Text>
    </>
  );
};

export default ProjectsPage;
