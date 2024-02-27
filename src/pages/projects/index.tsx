import { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import {
  Heading,
  Text,
  Card,
  VStack,
  StackDivider,
  CardBody,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import projects from "../../lib/data/projects.json";

const ProjectComponent = (
  key: number,
  projectTitle: string,
  engine: string,
  gitlabLink: string,
  projectDescription: string,
  projectImage: string
) => {
  const slugUrl = `/projects/${key}`;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
    >
      <Image
        objectFit="cover"
        maxW={"100%"}
        src={projectImage}
        alt="Caffe Latte"
      />
      <Stack pt="4" pl="8">
        <CardBody>
          <Link
            fontFamily="ingra"
            fontWeight="700"
            fontSize="2xl"
            fontStyle="normal"
            color="#430707"
            mb="4"
            as={NextLink}
            href={slugUrl}
          >
            {projectTitle}
          </Link>
          <Heading
            fontFamily="ingra"
            fontWeight="500"
            fontSize="2xl"
            fontStyle="normal"
            mb="4"
            as="h3"
          >
            {engine} //{" "}
            <Link variant="inline" href={gitlabLink}>
              Gitlab
            </Link>
          </Heading>
          <Text fontFamily="ingra" fontWeight="400" fontStyle="normal" py="2">
            {projectDescription}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Jordan Kozmary</title>
      </Head>
      <Heading
        fontFamily="ingra"
        fontWeight="700"
        fontStyle="normal"
        color="#430707"
        mb="4"
        pb="6"
        as="h1"
      >
        Side Projects of Mine
      </Heading>
      <Text>Coming soon!</Text>
      {/* <VStack divider={<StackDivider borderColor="gray.200" />} spacing={8}>
        {projects.map((project) => {
          return ProjectComponent(
            project.key,
            project.projectTitle,
            project.engine,
            project.gitlabLink,
            project.projectDescription,
            project.projectImage
          );
        })}
      </VStack> */}
    </>
  );
};

export default ProjectsPage;
