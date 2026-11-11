import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { VStack } from "@chakra-ui/react";
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
    <VStack mt={"10"} mb={"12"}>
      <ReactCompareSlider
        style={{
          width: "1000px",
          maxWidth: "100%",
        }}
        itemOne={<ReactCompareSliderImage src={imageUrl(imageOne)} alt={imageOneAlt} loading="lazy" decoding="async" />}
        itemTwo={<ReactCompareSliderImage src={imageUrl(imageTwo)} alt={imageTwoAlt} loading="lazy" decoding="async" />}
      />
    </VStack>
  );
};

export default CompareImage;
