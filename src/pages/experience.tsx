import { NextPage } from "next";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  SimpleGrid,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
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
      pb="16"
    >
      <Image
        objectFit="cover"
        maxW={"100%"}
        src={gameImage}
        alt="Caffe Latte"
      />
      <Stack pl="6">
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
          <Text py="2">{gameDescription}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const ExperiencePage: NextPage = () => {
  console.log(experience);
  return (
    <>
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
      {experience.map((job) => {
        return ExperienceComponent(
          job.gameTitle,
          job.studio,
          job.gameDescription,
          job.gameImage
        );
      })}
    </>
  );
};

export default ExperiencePage;
