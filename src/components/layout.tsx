import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
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
}
const NavigationItems: Array<NavigationItemProps> = [
  { name: 'Resume'},
  { name: 'Experience'},
  { name: 'Projects'},
  { name: 'Writing'},
  { name: 'Contact'},
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
      <MobileNav onOpen={onOpen} />
      <Box 
        ml={{ base: 0, md: 72 }} 
        mr={{ base: 0, md: 12 }} 
        mt={{ base: 0, md: 10 }} 
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
      transition="3s ease"
      bg='#451919'
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" color="white" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {NavigationItems.map((link) => (
        <NavItem key={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg='#451919'
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        bg="white"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        color="white"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};