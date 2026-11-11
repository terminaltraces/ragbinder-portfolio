import { VStack } from "@chakra-ui/react";
import { imageUrl } from "../../lib/urls";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <VStack as="figure" mt={"10"} mb={"12"} mx="0">
      <img
        width={1000}
        height={1000}
        src={imageUrl(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
      />
    </VStack>
  );
}
