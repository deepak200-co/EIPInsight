"use client";
import { Box, Flex, IconButton, VStack, Text, Divider } from "@chakra-ui/react";
import { FiHome, FiBarChart, FiLayers, FiSettings, FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation"; 

const Sidebar = () => {
  const router = useRouter(); 

  return (
    <Box
      as="nav"
      w={{ base: "full", md: "250px" }}
      h="100vh"
      bg="gray.900"
      color="white"
      p={5}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
        Dashboard
      </Text>
      <Divider mb={6} />
      <VStack align="stretch" spacing={4} flex="1">
        <NavItem icon={FiHome} label="Overview" />
        <NavItem icon={FiBarChart} label="Category" />
        <NavItem icon={FiLayers} label="Status" />
        <NavItem icon={FiSettings} label="Settings" />
      </VStack>

      <Flex mt={6} justify="center">
        <NavItem
          icon={FiLogOut}
          label="Exit"
          onClick={() => router.push("/")} 
        />
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, label, onClick }) => {
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
        icon={icon()}
        bg="transparent"
        color="white"
        _hover={{ bg: "transparent" }}
        mr={3}
      />
      <Text fontSize="md">{label}</Text>
    </Flex>
  );
};

export default Sidebar;
