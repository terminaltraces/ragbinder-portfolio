import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { VStack } from "@chakra-ui/react";

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
        }}
        itemOne={<ReactCompareSliderImage src={imageOne} alt={imageOneAlt} />}
        itemTwo={<ReactCompareSliderImage src={imageTwo} alt={imageTwoAlt} />}
      />
    </VStack>
  );
};

export default CompareImage;
