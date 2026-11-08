import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

export interface Experience {
  gameTitle: string;
  studio: string;
  gameDescription: string;
  gameImage: string;
}

export default function ExperienceCard({
  gameTitle,
  studio,
  gameDescription,
  gameImage,
}: Experience) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
    >
      <Image
        objectFit="cover"
        maxW="25rem"
        src={gameImage}
        alt={`${gameTitle} key art`}
        loading="lazy"
      />
      <Stack pt="4" pl="8">
        <CardBody>
          <Heading
            fontWeight="700"
            fontSize="2xl"
            color="brand.oxblood"
            mb="4"
            as="h2"
          >
            {gameTitle}
          </Heading>
          <Heading fontWeight="500" fontSize="lg" mb="4" as="h3">
            {studio}
          </Heading>
          <Text py="2">{gameDescription}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
