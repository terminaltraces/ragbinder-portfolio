import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

interface HomeCardProps {
  imageSrc: string;
  imageAlt: string;
  href: string;
  label: string;
  title: string;
}

/**
 * The LinkBox/Card/LinkOverlay pattern from the home page, parameterized.
 * New homepage cards are now ~6 lines of data instead of 35 lines of JSX.
 */
export default function HomeCard({
  imageSrc,
  imageAlt,
  href,
  label,
  title,
}: HomeCardProps) {
  return (
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
              maxW="100%"
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
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
            <LinkOverlay href={href}>
              <Stack>
                <Text color="white" fontWeight={600}>
                  {label}
                </Text>
                <Heading marginTop={0} color="white">
                  {title}
                </Heading>
              </Stack>
            </LinkOverlay>
          </CardFooter>
        </Stack>
      </Card>
    </LinkBox>
  );
}
