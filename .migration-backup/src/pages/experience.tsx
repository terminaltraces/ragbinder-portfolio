import { NextPage } from "next";
import Head from "next/head";
import { VStack, StackDivider, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import experience from "../lib/data/experience.json";
import ExperienceCard, { Experience } from "../components/ExperienceCard";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience | Jordan Kozmary</title>
      </Head>
      <Heading
        fontWeight="700"
        color="brand.oxblood"
        mb="4"
        pb="6"
        as="h1"
      >
        Industry Experience
      </Heading>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={8}>
        <Text>
          I've worked on Office for iOS and Algorithmic trading software before
          making the jump into games, and have worked on The Lamplighters'
          League and Call of Duty: Warzone. I have a Master's degree in Computer
          Science, and have written code that wrang every drop of performance
          out of the supercomputers at Argonne National Laboratory. I'm very
          comfortable working on huge, complicated, legacy codebases, or at
          least as comfortable as one can be. I have experience with Unreal and
          Unity - see my personal demos{" "}
          <Link
            as={NextLink}
            color="brand.oxblood"
            textDecoration="underline"
            href="/projects"
          >
            here
          </Link>
          .
        </Text>
        {(experience as Experience[]).map((job) => (
          <ExperienceCard key={job.gameTitle} {...job} />
        ))}
      </VStack>
    </>
  );
};

export default ExperiencePage;
