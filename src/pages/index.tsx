import { NextPage } from "next";
import Head from "next/head";
import {
  Heading,
  Text,
  Card,
  SimpleGrid,
  CardBody,
  CardFooter,
  Image,
  Stack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Jordan Kozmary</title>
      </Head>
      <Heading
        fontFamily="ingra"
        fontWeight="700"
        fontStyle="normal"
        color="#430707"
        mb="4"
      >
        Hey, I'm Jordan.
      </Heading>
      <Text fontFamily="ingra" fontWeight="400" fontStyle="normal" mb="8">
        I make games! I love games with deep mechanics that allow the player to
        express themselves through emergent gameplay. If it makes sense talking
        about a build in the context of your game, I'd probably love it. Board
        games are a huge influence on me, from fiddly euros about trading brown
        cubes for red ones, to cooperative horror games where a scrappy group of
        adventurers takes on the elder gods.
      </Text>
      <SimpleGrid spacing={4} columns={{ xl: 3, lg: 2 }}>
        <LinkBox>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="unstyled"
          >
            <Stack>
              <CardBody>
                <Image
                  objectFit="cover"
                  maxW={"100%"}
                  src="/images/MWII-SEASON-01-ROADMAP-004.png"
                  alt="Caffe Latte"
                />
              </CardBody>
              <CardFooter
                bg="black"
                opacity={0.7}
                pos="absolute"
                p={4}
                bottom={0}
                left={0}
                borderRadius="xl"
              >
                <LinkOverlay href="/experience">
                  <Stack>
                    <Text color={"white"} fontWeight={600}>
                      Currently working at:
                    </Text>
                    <Heading marginTop={0} color={"white"}>
                      Activision-Blizzard
                    </Heading>
                  </Stack>
                </LinkOverlay>
              </CardFooter>
            </Stack>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="unstyled"
          >
            <Stack>
              <CardBody>
                <Image
                  objectFit="cover"
                  maxW={"100%"}
                  src="/images/British_Museum_Royal_Game_of_Ur.png"
                  alt="Caffe Latte"
                />
              </CardBody>
              <CardFooter
                bg="black"
                opacity={0.7}
                pos="absolute"
                p={4}
                bottom={0}
                left={0}
                borderRadius="xl"
              >
                <LinkOverlay href="/projects">
                  <Stack>
                    <Text color={"white"} fontWeight={600}>
                      Play my game:
                    </Text>
                    <Heading marginTop={0} color={"white"}>
                      Game of Ur
                    </Heading>
                  </Stack>
                </LinkOverlay>
              </CardFooter>
            </Stack>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="unstyled"
          >
            <Stack>
              <CardBody>
                <Image
                  objectFit="cover"
                  maxW={"100%"}
                  src="/images/pankaj-patel-ZV_64LdGoao-unsplash.png"
                  alt="Caffe Latte"
                />
              </CardBody>
              <CardFooter
                bg="black"
                opacity={0.7}
                pos="absolute"
                p={4}
                bottom={0}
                left={0}
                borderRadius="xl"
              >
                <LinkOverlay href="https://gitlab.com/ragbinder">
                  <Stack>
                    <Text color={"white"} fontWeight={600}>
                      See my code:
                    </Text>
                    <Heading marginTop={0} color={"white"}>
                      Gitlab/Ragbinder
                    </Heading>
                  </Stack>
                </LinkOverlay>
              </CardFooter>
            </Stack>
          </Card>
        </LinkBox>
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
