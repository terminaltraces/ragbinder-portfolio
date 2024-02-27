import React from "react";
import Image from "next/image";
import { VStack } from "@chakra-ui/react";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <VStack mt={"10"} mb={"12"}>
      <Image width={1000} height={1000} src={src} alt={alt}></Image>
    </VStack>
  );
}
