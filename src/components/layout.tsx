import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Image,
  Link,
  Icon,
  Stack,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGitlab, AiOutlineMail } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { ReactText } from "react";

interface NavigationItemProps {
  name: string;
  link: string;
}
const NavigationItems: Array<NavigationItemProps> = [
  { name: "Resume", link: "/sjk-resume.pdf" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Writing", link: "/writing" },
  { name: "Contact", link: "mailto:kozmary@gmail.com" },
];

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgImage="/images/bkg_base.png"
      bgRepeat="repeat"
      bgPosition="center"
      backgroundAttachment="fixed"
      minH="105vh"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Image
        src="/images/mohammad-rahmani-LrxSl4ZxoRs-unsplash.png"
        fit={{ base: "cover", md: "fill" }}
        w="100vw"
        h={{ base: "165px", md: "265px" }}
        ml={{ base: 0, md: 100 }}
      />
      <Box
        ml={{ base: 0, md: 72 }}
        mr={{ base: 0, md: 12 }}
        position="relative"
        top={{ base: "25px", md: "40px" }}
        pt="100px"
        pl="40px"
        pr="40px"
        pb="50px"
        bg="white"
      >
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg="#451919"
      w={{ base: "full", md: 64 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        mt="68"
        mx="8"
      >
        <Stack>
          <Link href="/" color="white">
            <Text
              fontSize="4xl"
              color="white"
              fontFamily="dutch-mediaeval-pro"
              fontWeight="700"
              mb="5px"
            >
              Jordan Kozmary,
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              fontFamily="dutch-mediaeval-pro"
              fontWeight="700"
            >
              Game Developer.
            </Text>
          </Link>
          <hr
            style={{
              border: "1px solid white",
              width: "100px",
              marginTop: "35px",
              marginBottom: "25px",
            }}
          />
          <Flex flexDir="row" mt="5vh" mx="8" mb="8">
            <Link href="https://www.linkedin.com/in/kozmary/">
              <Icon
                mr="4"
                fontSize="30"
                color="white"
                as={AiFillLinkedin}
                _hover={{
                  bg: "#D8CBB8",
                  color: "#451919",
                }}
              />
            </Link>
            <Link href="https://gitlab.com/kozmary">
              <Icon
                mr="4"
                fontSize="30"
                color="white"
                as={AiFillGitlab}
                _hover={{
                  bg: "#D8CBB8",
                  color: "#451919",
                }}
              />
            </Link>
            <Link href="mailto:kozmary@gmail.com">
              <Icon
                mr="4"
                fontSize="30"
                color="white"
                as={AiOutlineMail}
                _hover={{
                  bg: "#D8CBB8",
                  color: "#451919",
                }}
              />
            </Link>
          </Flex>
          <hr
            style={{
              border: "1px solid white",
              width: "100px",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          />
        </Stack>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          color="white"
          onClick={onClose}
          _hover={{
            bg: "#D8CBB8",
            color: "#451919",
          }}
        />
      </Flex>
      {NavigationItems.map((nav) => (
        <NavItem key={nav.name} link={nav.link}>
          {nav.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
  link: string;
}
const NavItem = ({ link, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={link}
      style={{
        fontFamily: "dutch-mediaeval-pro",
        fontSize: "x-large",
        fontWeight: "700",
        textDecoration: "none",
      }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        color="white"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#D8CBB8",
          color: "#451919",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="#451919"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        color="white"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        _hover={{
          bg: "#D8CBB8",
          color: "#451919",
        }}
      />
      <Link href="/" color="white">
        <Text
          fontSize={{ base: "xl", sm: "2xl" }}
          color="white"
          fontFamily="dutch-mediaeval-pro"
          fontWeight="700"
          ml="25px"
        >
          Jordan Kozmary, Game Developer.
        </Text>
      </Link>
    </Flex>
  );
};
