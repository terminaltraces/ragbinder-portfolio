import { NextPage } from "next";
import { Heading, Text, Card, CardHeader, SimpleGrid, CardBody, CardFooter, Image, Stack, Button } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
    return <>
        <Heading fontFamily="ingra" fontWeight="700" fontStyle="normal" color="#430707" mb="4">Hey, I'm Jordan.</Heading>
        <Text fontFamily="ingra" fontWeight="400" fontStyle="normal" mb="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum sit amet ipsum et laoreet. Etiam aliquam ullamcorper lacus, non 
laoreet libero semper vitae. Donec ullamcorper felis elit, nec sagittis neque efficitur ut. Aenean ac lobortis augue. Nulla pulvinar interdum justo. 
Pellentesque elementum, metus quis bibendum aliquam, mauris odio venenatis felis, a efficitur arcu metus scelerisque risus. Integer mauris mi, 
gravida vel mattis ut, congue interdum purus.</Text>
        <Heading fontFamily="ingra" fontWeight="700" fontStyle="normal" color="#430707" mb="4">I love video games.</Heading>
        <Text fontFamily="ingra" fontWeight="400" fontStyle="normal" mb="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum sit amet ipsum et laoreet. Etiam aliquam ullamcorper lacus, non 
laoreet libero semper vitae. Donec ullamcorper felis elit, nec sagittis neque efficitur ut. Aenean ac lobortis augue. Nulla pulvinar interdum justo. 
Pellentesque elementum, metus quis bibendum aliquam, mauris odio venenatis felis, a efficitur arcu metus scelerisque risus. Integer mauris mi, 
gravida vel mattis ut, congue interdum purus.</Text>
        <SimpleGrid spacing={4} columns={{xl: 3, lg: 2}}>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
            >
                <Stack>
                    <CardBody>
                        <Image
                            objectFit='cover'
                            maxW={'100%'}
                            src='/images/MWII-SEASON-01-ROADMAP-004.png'
                            alt='Caffe Latte'
                        />
                    </CardBody>
                    <CardFooter bg="black" opacity={0.7} pos="absolute" p={4} bottom={0} left={0} borderRadius="xl">
                        <Stack>
                            <Text color={"white"} fontWeight={600}>Currently working at:</Text>
                            <Heading marginTop={0} color={"white"}>Activision-Blizzard</Heading>
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
            >
                <Stack>
                    <CardBody>
                        <Image
                            objectFit='cover'
                            maxW={'100%'}
                            src='/images/British_Museum_Royal_Game_of_Ur.png'
                            alt='Caffe Latte'
                        />
                    </CardBody>
                    <CardFooter bg="black" opacity={0.7} pos="absolute" p={4} bottom={0} left={0} borderRadius="xl">
                        <Stack>
                            <Text color={"white"} fontWeight={600}>Play my game:</Text>
                            <Heading marginTop={0} color={"white"}>Game of Ur</Heading>
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
            >
                <Stack>
                    <CardBody>
                        <Image
                            objectFit='cover'
                            maxW={'100%'}
                            src='/images/pankaj-patel-ZV_64LdGoao-unsplash.png'
                            alt='Caffe Latte'
                        />
                    </CardBody>
                    <CardFooter bg="black" opacity={0.7} pos="absolute" p={4} bottom={0} left={0} borderRadius="xl">
                        <Stack>
                            <Text color={"white"} fontWeight={600}>See my code:</Text>
                            <Heading marginTop={0} color={"white"}>Gitlab/Ragbinder</Heading>
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
        </SimpleGrid>
    </>;

};

export default IndexPage;
