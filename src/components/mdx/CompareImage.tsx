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
        itemOne={
          <ReactCompareSliderImage
            src="/images/unreal-landscape-hex-3.png"
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/images/unreal-landscape-hex-4.png"
            alt="Image two"
          />
        }
      />
    </VStack>
  );
};

export default CompareImage;
