import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";
import OverView from "@components/dashboard/home/OverView";
import Category from "@components/dashboard/home/Category";
import Status from "@components/dashboard/home/Status";

const Home = () => {
    return (
        <Box px={{base: 4, md: 6}} py={4} w="full" bg="gray.50" minH="100vh">
            <Flex align="center" justify="space-between" mb={4}>
                <Breadcrumb fontWeight="medium" fontSize="sm" color="gray.600">
                    <BreadcrumbItem>
                        <BreadcrumbLink>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Box w={{base: '200px', md: '300px'}} maxW="300px">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <FiSearch color="gray.400"/>
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Search..."
                            pl="10"
                            bg="white"
                            borderRadius="8px"
                            border="1px solid"
                            borderColor="gray.300"
                            _placeholder={{color: 'gray.500'}}
                        />
                    </InputGroup>
                </Box>
            </Flex>

            <VStack align="start" spacing={2} mb={6}>
                <Heading fontSize={{base: "lg", md: "2xl"}} fontWeight="bold"   color="gray.800">
                    Hi, Welcome back 👋
                </Heading>
                <Text fontSize="sm" color="gray.600">Here’s what’s happening with your dashboard today.</Text>
            </VStack>

            <OverView/>
            <Category/>
            <Status/>
        </Box>
    );
}

export default Home;
