import useTitle from "../../lib/useTitle";
import { Heading, Text } from "@chakra-ui/react";

const ProjectsPage = () => {
  useTitle("Projects | Jordan Kozmary");
  return (
    <>
      <Heading
        fontWeight="700"
        color="brand.oxblood"
        mb="4"
        pb="6"
        as="h1"
      >
        Side Projects of Mine
      </Heading>
      <Text>Coming soon!</Text>
    </>
  );
};

export default ProjectsPage;
