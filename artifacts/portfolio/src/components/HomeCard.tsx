import { Box, Heading, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "wouter";
import { imageUrl } from "../lib/urls";

interface HomeCardProps {
  imageSrc: string;
  imageAlt: string;
  href: string;
  label: string;
  title: string;
}

/** Whole-card link with one accessible name (label + title); image is decorative. */
export default function HomeCard({ imageSrc, href, label, title }: HomeCardProps) {
  const internal = href.startsWith("/");
  return (
    <LinkBox
      as="article"
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      bg="brand.merlot"
      minW={0}
      sx={{
        "&:hover img": { opacity: 0.85 },
        "&:focus-within": { outline: "3px solid", outlineColor: "brand.rust", outlineOffset: "3px" },
      }}
    >
      <Image
        objectFit="cover"
        w="100%"
        sx={{ aspectRatio: "3 / 2" }}
        src={imageUrl(imageSrc)}
        htmlWidth={419}
        htmlHeight={279}
        decoding="async"
        alt=""
        loading="lazy"
        transition="opacity 200ms ease"
      />
      <Box
        position="absolute"
        insetX={0}
        bottom={0}
        px={4}
        pt={10}
        pb={4}
        bgGradient="linear(to-t, rgba(42,8,8,0.94) 45%, rgba(42,8,8,0))"
      >
        <Text color="brand.cream" fontWeight={600} fontSize="sm" letterSpacing="0.04em" mb={1}>
          {label}
        </Text>
        <Heading as="h2" size="md" color="white" lineHeight="1.2">
          <LinkOverlay
            as={internal ? RouterLink : "a"}
            href={href}
            {...(!internal && { rel: "noopener noreferrer" })}
            _focusVisible={{ outline: "none" }}
          >
            {title}
          </LinkOverlay>
        </Heading>
      </Box>
    </LinkBox>
  );
}
