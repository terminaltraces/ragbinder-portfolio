import { NextPage } from "next";
import {
  Heading,
  Text,
  Card,
  VStack,
  StackDivider,
  CardBody,
  Image,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import experience from "../lib/data/experience.json";

const ExperienceComponent = (
  gameTitle: string,
  studio: string,
  gameDescription: string,
  gameImage: string
) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
    >
      <Image
        objectFit="cover"
        maxW={"25rem"}
        src={gameImage}
        alt="Caffe Latte"
      />
      <Stack pt="4" pl="8">
        <CardBody>
          <Heading
            fontFamily="ingra"
            fontWeight="700"
            fontSize="2xl"
            fontStyle="normal"
            color="#430707"
            mb="4"
            as="h2"
          >
            {gameTitle}
          </Heading>
          <Heading
            fontFamily="ingra"
            fontWeight="500"
            fontSize="2xl"
            fontStyle="normal"
            mb="4"
            as="h3"
          >
            {studio}
          </Heading>
          <Text fontFamily="ingra" fontWeight="400" fontStyle="normal" py="2">
            {gameDescription}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience | Steven Jordan Kozmary</title>
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
        Titles I've Worked On
      </Heading>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={8}>
        {experience.map((job) => {
          return ExperienceComponent(
            job.gameTitle,
            job.studio,
            job.gameDescription,
            job.gameImage
          );
        })}
      </VStack>
    </>
  );
};

export default ExperiencePage;
