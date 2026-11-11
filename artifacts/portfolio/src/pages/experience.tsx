import useTitle from "../lib/useTitle";
import { Box, VStack, StackDivider, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "wouter";
import experience from "../lib/data/experience.json";
import ExperienceCard, { Experience } from "../components/ExperienceCard";

const ExperiencePage = () => {
  useTitle("Experience | Jordan Kozmary");
  return (
    <>
      <Heading
        fontWeight="700"
        color="brand.oxblood"
        mb="4"
        pb="6"
        as="h1"
      >
        Industry Experience
      </Heading>
      <Text mb="10" fontSize={{ md: "lg" }}>
          I've worked on Office for iOS and Algorithmic trading software before
          making the jump into games, and have worked on The Lamplighters'
          League and Call of Duty: Warzone. I have a Master's degree in Computer
          Science, and have written code that wrang every drop of performance
          out of the supercomputers at Argonne National Laboratory. I'm very
          comfortable working on huge, complicated, legacy codebases, or at
          least as comfortable as one can be. I have experience with Unreal and
          Unity - see my personal demos{" "}
          <Link
            as={RouterLink}
            color="brand.rust"
            textDecoration="underline"
            textUnderlineOffset="3px"
            href="/projects"
          >
            here
          </Link>
          .
      </Text>
      <VStack as="ul" listStyleType="none" m="0" p="0" align="stretch" divider={<StackDivider borderColor="brand.cream" />} spacing={10}>
        {(experience as Experience[]).map((job) => (
          <Box as="li" key={job.gameTitle}><ExperienceCard {...job} /></Box>
        ))}
      </VStack>
    </>
  );
};

export default ExperiencePage;
