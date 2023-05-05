import { NextPage } from "next";
import { Heading, Text, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
    return <>
        <Heading>Hey, I'm Jordan</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum sit amet ipsum et laoreet. Etiam aliquam ullamcorper lacus, non 
laoreet libero semper vitae. Donec ullamcorper felis elit, nec sagittis neque efficitur ut. Aenean ac lobortis augue. Nulla pulvinar interdum justo. 
Pellentesque elementum, metus quis bibendum aliquam, mauris odio venenatis felis, a efficitur arcu metus scelerisque risus. Integer mauris mi, 
gravida vel mattis ut, congue interdum purus.</Text>
        <Heading>I love video games.</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum sit amet ipsum et laoreet. Etiam aliquam ullamcorper lacus, non 
laoreet libero semper vitae. Donec ullamcorper felis elit, nec sagittis neque efficitur ut. Aenean ac lobortis augue. Nulla pulvinar interdum justo. 
Pellentesque elementum, metus quis bibendum aliquam, mauris odio venenatis felis, a efficitur arcu metus scelerisque risus. Integer mauris mi, 
gravida vel mattis ut, congue interdum purus.</Text>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </>;

};

export default IndexPage;
