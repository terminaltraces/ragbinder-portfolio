import React, { ReactNode, useEffect, useRef } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Image,
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
import { useLocation } from "wouter";
import Link from "./SiteLink";
import { imageUrl } from "../lib/urls";

const wordmarkFont = { fontFamily: "display" } as const;

const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ComponentType;
  label: string;
}) => (
  <Link
    href={href}
    isExternal={!href.startsWith("mailto:")}
    aria-label={label}
    display="inline-flex"
    mr="3"
    p="1"
    borderRadius="md"
    color="white"
    _hover={{ bg: "brand.cream", color: "brand.merlot" }}
    _focusVisible={{
      outline: "2px solid",
      outlineColor: "brand.cream",
      outlineOffset: "2px",
    }}
  >
    <Icon fontSize="28" as={icon} aria-hidden="true" focusable="false" />
  </Link>
);

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

const Divider = (props: { mt: string; mb: string }) => (
  <Box
    as="hr"
    role="presentation"
    borderTop="1px solid white"
    borderBottom="none"
    w="100px"
    {...props}
  />
);

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location] = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    onClose();
    if (firstRender.current) { firstRender.current = false; return; }
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    // Lazy routes may resolve after navigation: wait for the actual page heading.
    const focusHeading = () => {
      const h1 = Array.from(mainRef.current?.querySelectorAll<HTMLElement>("h1") ?? [])
        .find((heading) => heading.getClientRects().length > 0);
      if (!h1) return false;
      h1.setAttribute("tabindex", "-1");
      h1.setAttribute("data-route-heading", "");
      h1.focus({ preventScroll: true });
      return true;
    };
    if (focusHeading()) return;
    mainRef.current?.focus({ preventScroll: true });
    const observer = new MutationObserver(() => {
      if (focusHeading()) observer.disconnect();
    });
    if (mainRef.current) observer.observe(mainRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location, onClose]);
  return (
    <Box
      bgImage={imageUrl("/images/bkg_base.png")}
      bgRepeat="repeat"
      bgPosition="center"
      backgroundAttachment="fixed"
      minH="100dvh"
      overflowX="clip"
    >
      <Link
        href="#main-content"
        position="absolute"
        left="-9999px"
        top="8px"
        bg="brand.merlot"
        color="white"
        p="3"
        zIndex="overlay"
        borderRadius="md"
        _focus={{
          left: "8px",
          top: "8px",
          outline: "2px solid",
          outlineColor: "brand.cream",
          outlineOffset: "2px",
        }}
      >
        Skip to main content
      </Link>
      <Box as="header">
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent aria-label="Site menu">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} isOpen={isOpen} />
      </Box>
      <Image
        src={imageUrl("/images/mohammad-rahmani-LrxSl4ZxoRs-unsplash.png")}
        fetchPriority="high"
        decoding="async"
        fit={{ base: "cover", md: "fill" }}
        w={{ base: "100%", md: "calc(100% - 16rem)" }}
        h={{ base: "140px", md: "265px" }}
        ml={{ base: 0, md: 64 }}
        alt=""
        aria-hidden="true"
      />
      <Box
        as="main"
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        ml={{ base: 0, md: 72 }}
        mr={{ base: 0, md: 12 }}
        position="relative"
        mt={{ base: 0, md: "40px" }}
        mb={{ base: 0, md: 12 }}
        pt={{ base: 10, md: 16 }}
        px={{ base: 5, sm: 8, lg: 14 }}
        pb={{ base: 12, md: 16 }}
        bg="brand.paper"
        color="brand.ink"
        borderTop="4px solid"
        borderColor="brand.oxblood"
        boxShadow={{ md: "0 1px 2px rgba(67,7,7,0.08), 0 12px 32px -12px rgba(67,7,7,0.25)" }}
        minW={0}
      >
        <Box maxW="72ch" mx="auto">{children}</Box>
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
      as="nav"
      aria-label="Site navigation"
      bg="brand.merlot"
      w={{ base: "full", md: 64 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      {...rest}
    >
      <Flex
        flexDir="row"
        justifyContent="space-between"
        alignItems="flex-start"
        mt={{ base: 10, md: "68" }}
        mx="8"
      >
        <Stack>
          <Link
            href="/"
            color="white"
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "brand.cream",
              outlineOffset: "2px",
            }}
          >
            <Text
              fontSize="4xl"
              color="white"
              {...wordmarkFont}
              fontWeight="700"
              wordBreak="normal"
              overflowWrap="normal"
              className="no-hyphens"
              sx={{ hyphens: "none" }}
              mb="5px"
            >
              Jordan Kozmary,
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              {...wordmarkFont}
              fontWeight="700"
            >
              Game Developer.
            </Text>
          </Link>
          <Divider mt="35px" mb="25px" />
          <Flex as="ul" flexDir="row" listStyleType="none" m="0" p="0" aria-label="Elsewhere">
            <li><SocialIcon
              href="https://www.linkedin.com/in/kozmary/"
              icon={AiFillLinkedin}
              label="Jordan Kozmary on LinkedIn"
            /></li>
            <li><SocialIcon
              href="https://gitlab.com/kozmary"
              icon={AiFillGitlab}
              label="Jordan Kozmary on GitLab"
            /></li>
            <li><SocialIcon
              href="mailto:kozmary@gmail.com"
              icon={AiOutlineMail}
              label="Email Jordan Kozmary"
            /></li>
          </Flex>
          <Divider mt="25px" mb="25px" />
        </Stack>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          color="white"
          onClick={onClose}
          aria-label="Close menu"
          size="lg"
          _hover={{ bg: "brand.cream", color: "brand.merlot" }}
        />
      </Flex>
      <Box as="ul" listStyleType="none" m="0" p="0" pb="8">
        {NavigationItems.map((nav) => (
          <Box as="li" key={nav.name}>
            <NavItem link={nav.link} onClick={onClose}>
              {nav.name}
            </NavItem>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactNode;
  link: string;
}
const NavItem = ({ link, children, ...rest }: NavItemProps) => {
  const [pathname] = useLocation();
  const isCurrent = (pathname.replace(/\/$/, "") || "/") === link;
  return (
    <Link
      href={link}
      aria-current={isCurrent ? "page" : undefined}
      {...wordmarkFont}
      fontSize="x-large"
      fontWeight="700"
      textDecoration="none"
      display="block"
      _focus={{ boxShadow: "none" }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "brand.cream",
        outlineOffset: "-2px",
        borderRadius: "lg",
      }}
      _hover={{ textDecoration: "none" }}
      sx={{ "&[aria-current=page] > div": { borderLeft: "3px solid", borderColor: "brand.cream" } }}
    >
      <Flex
        transition="background-color 150ms ease, color 150ms ease"
        align="center"
        color="white"
        p="4"
        mx="4"
        borderRadius="lg"

        _hover={{ bg: "brand.cream", color: "brand.merlot" }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  isOpen: boolean;
}
const MobileNav = ({ onOpen, isOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="brand.merlot"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        color="white"
        onClick={onOpen}
        aria-label="Open site menu"
        aria-expanded={isOpen}
        icon={<FiMenu />}
        _focusVisible={{ outline: "3px solid", outlineColor: "brand.cream", outlineOffset: "3px" }}
        _hover={{ bg: "brand.cream", color: "brand.merlot" }}
      />
      <Link href="/" color="white" minW={0} _focusVisible={{ outline: "3px solid", outlineColor: "brand.cream", outlineOffset: "3px" }}>
        <Text
          as="span"
          display="block"
          className="no-hyphens"
          lineHeight="1.2"
          fontSize={{ base: "lg", sm: "2xl" }}
          color="white"
          {...wordmarkFont}
          fontWeight="700"
          ml="4"
        >
          Jordan Kozmary, Game Developer.
        </Text>
      </Link>
    </Flex>
  );
};
