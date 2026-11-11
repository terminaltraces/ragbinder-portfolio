import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Text, VStack } from "@chakra-ui/react";
import { imageUrl } from "../../lib/urls";

type CompareImageProps = {
  imageOne: string;
  imageOneAlt: string;
  imageTwo: string;
  imageTwoAlt: string;
};

const CompareImage = ({
  imageOne,
  imageOneAlt,
  imageTwo,
  imageTwoAlt,
}: CompareImageProps) => {
  return (
    <VStack as="figure" mt={"10"} mb={"12"} mx="0"
      sx={{ "[role=slider]:focus-visible": { outline: "3px solid #8A2B1F !important", outlineOffset: "-3px" } }}
    >
      <ReactCompareSlider
        style={{
          width: "1000px",
          maxWidth: "100%",
        }}
        itemOne={<ReactCompareSliderImage src={imageUrl(imageOne)} alt={imageOneAlt} loading="lazy" decoding="async" />}
        itemTwo={<ReactCompareSliderImage src={imageUrl(imageTwo)} alt={imageTwoAlt} loading="lazy" decoding="async" />}
      />
      <Text as="figcaption" fontSize="sm" color="brand.muted">
        Compare the terrain images: drag the divider, or focus it and use the arrow keys.
      </Text>
    </VStack>
  );
};

export default CompareImage;
