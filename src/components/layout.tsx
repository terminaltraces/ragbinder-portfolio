import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Image,
  Link,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import { ReactText } from 'react';

interface NavigationItemProps {
  name: string;
  link: string;
}
const NavigationItems: Array<NavigationItemProps> = [
  { name: 'Resume', link: '/resume' },
  { name: 'Experience', link: '/experience' },
  { name: 'Projects', link: '/projects' },
  { name: 'Writing', link: '/writing'},
  { name: 'Contact', link: '/contact'},
];

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bgImage="/images/bkg_base.png" bgRepeat="repeat">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Image 
        src="/images/mohammad-rahmani-LrxSl4ZxoRs-unsplash.png" 
        fit={{base: "cover", md: "fill"}} 
        w="100vw" 
        h={{base: "165px", md: "265px"}} 
        ml={{ base:0, md:100}}/>
      <Box 
        ml={{ base: 0, md: 72 }} 
        mr={{ base: 0, md: 12 }} 
        position="relative"
        top={{base: "25px", md: "50px"}}
        p="4" 
        bg="white">
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
      bg='#451919'
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex flexDir="column" mt="68" mx="8">
        <Link href="/" color="white">
          <Text fontSize="3xl" color="white" fontFamily="monospace" fontWeight="bold" mb="5px">Jordan Kozmary,</Text>
          <Text fontSize="xl" color="white" fontFamily="monospace" fontWeight="bold" >Game Developer</Text>
          <hr style={{border: "1px solid white", width: "100px", marginTop: "15px", marginBottom: "10px"}}/>
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} color="white" onClick={onClose} />
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
    <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        color="white"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          textDecoration:"underline"
        }}
        {...rest}>
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
      bg='#451919'
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        color="white"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Link fontSize="2xl" color="white" ml="8" fontFamily="monospace" fontWeight="bold" href="/">
        Jordan Kozmary <br/> Game Developer
      </Link>
    </Flex>
  );
};