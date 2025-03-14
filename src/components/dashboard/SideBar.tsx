"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  HStack,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiHome, FiBarChart, FiLayers, FiSettings, FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box
        as="header"
        w="100%"
        bg="gray.900"
        color="white"
        px={5}
        py={2}
        position="fixed"
        top="0"
        left="0"
        zIndex="1000"
        boxShadow="md"
      >
        <Flex align="center" justify="space-between">
          <Text fontSize="xl" fontWeight="bold">Dashboard</Text>

          <InputGroup display={{ base: "none", md: "block" }} w="300px">
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              bg="white"
              borderRadius="8px"
              border="1px solid"
              borderColor="gray.300"
              _placeholder={{ color: "gray.500" }}
            />
          </InputGroup>

          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <NavItem icon={FiHome} label="Overview" onClick={() => router.push("/overview")} />
            <NavItem icon={FiBarChart} label="Category" onClick={() => router.push("/category")} />
            <NavItem icon={FiLayers} label="Status" onClick={() => router.push("/status")} />
            <NavItem icon={FiSettings} label="Settings" onClick={() => router.push("/settings")} />
            <NavItem icon={FiLogOut} label="Exit" onClick={() => router.push("/")} />
          </HStack>

          <IconButton
            aria-label="Open Menu"
            icon={<FiMenu />}
            display={{ base: "block", md: "none" }}
            onClick={() => setIsOpen(true)}
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.700" }}
          />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerBody p={5}>
            <VStack align="stretch" spacing={4} mt={10}>
              <NavItem icon={FiHome} label="Overview" onClick={() => { router.push("/overview"); setIsOpen(false); }} />
              <NavItem icon={FiBarChart} label="Category" onClick={() => { router.push("/category"); setIsOpen(false); }} />
              <NavItem icon={FiLayers} label="Status" onClick={() => { router.push("/status"); setIsOpen(false); }} />
              <NavItem icon={FiSettings} label="Settings" onClick={() => { router.push("/settings"); setIsOpen(false); }} />
              <NavItem icon={FiLogOut} label="Exit" onClick={() => { router.push("/"); setIsOpen(false); }} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavItem = ({ icon: Icon, label, onClick }: { icon: IconType; label: string; onClick?: () => void }) => {
  return (
    <Flex
      align="center"
      p={3}
      borderRadius="md"
      transition="0.3s"
      _hover={{ bg: "gray.700", cursor: "pointer" }}
      onClick={onClick}
    >
      <IconButton
        aria-label={label}
        icon={<Icon />}
        bg="transparent"
        color="white"
        _hover={{ bg: "transparent" }}
        mr={3}
      />
      <Text fontSize="md">{label}</Text>
    </Flex>
  );
};

export default Navbar;
