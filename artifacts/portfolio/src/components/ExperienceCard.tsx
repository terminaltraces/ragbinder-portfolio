import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { imageUrl } from "../lib/urls";

export interface Experience {
  gameTitle: string;
  studio: string;
  gameDescription: string;
  gameImage: string;
}

export default function ExperienceCard({ gameTitle, studio, gameDescription, gameImage }: Experience) {
  return (
    <Box
      as="article"
      display="grid"
      gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 16rem) minmax(0, 1fr)" }}
      gap={{ base: 4, lg: 8 }}
      w="100%"
      minW={0}
    >
      <Image
        objectFit="cover"
        w="100%"
        borderRadius="md"
        sx={{ aspectRatio: "16 / 10" }}
        src={imageUrl(gameImage)}
        decoding="async"
        alt={`${gameTitle} key art`}
        loading="lazy"
      />
      <Box minW={0}>
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.25" mb="1">
          {gameTitle}
        </Heading>
        <Text fontWeight="600" color="brand.muted" mb="3">{studio}</Text>
        <Text>{gameDescription}</Text>
      </Box>
    </Box>
  );
}
