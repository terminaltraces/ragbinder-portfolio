import { NextPage } from "next";
import Head from "next/head";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Jordan Kozmary</title>
      </Head>
      <Heading as="h1" fontWeight="700" color="brand.oxblood" mb="4">
        Hey, I'm Jordan.
      </Heading>
      <Text mb="8">
        I make games! I love games with deep mechanics that allow the player to
        express themselves through emergent gameplay. If it makes sense talking
        about a build in the context of your game, I'd probably love it. Board
        games are a huge influence on me, from fiddly euros about trading brown
        cubes for red ones, to cooperative horror games where a scrappy group of
        adventurers takes on the elder gods.
      </Text>
      <SimpleGrid spacing={4} columns={{ xl: 3, lg: 2 }}>
        <HomeCard
          imageSrc="/images/MWII-SEASON-01-ROADMAP-004.png"
          imageAlt="Call of Duty: Warzone season roadmap key art"
          href="/experience"
          label="Currently working at:"
          title="Activision-Blizzard"
        />
        <HomeCard
          imageSrc="/images/British_Museum_Royal_Game_of_Ur.png"
          imageAlt="The Royal Game of Ur board at the British Museum"
          href="/projects"
          label="Play my game:"
          title="Game of Ur"
        />
        <HomeCard
          imageSrc="/images/pankaj-patel-ZV_64LdGoao-unsplash.png"
          imageAlt=""
          href="https://gitlab.com/ragbinder"
          label="See my code:"
          title="Gitlab/Ragbinder"
        />
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
