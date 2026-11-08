import { VStack } from "@chakra-ui/react";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <VStack mt={"10"} mb={"12"}>
      <img
        width={1000}
        height={1000}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ color: "transparent" }}
      />
    </VStack>
  );
}
