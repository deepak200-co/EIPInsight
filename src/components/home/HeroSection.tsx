
import { Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaPlus, FaRegBookmark } from "react-icons/fa";


const HeroSection = () => {
    return (
        <Box
            position="relative"
            w="full"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
            overflow="hidden"
        >
            <video
    autoPlay
    loop
    muted
    playsInline
    style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1
    }}
>
    <source src="/background.mp4" type="video/mp4" />
</video>


            <Box maxW={{ base: "90%", md: "60%" }} zIndex={1}>
            <Heading 
    as="h1" 
    fontSize={{ base: "3xl", md: "6xl" }} 
    fontWeight="bold" 
    mb={4}
    color="white"
    textShadow="2px 2px 6px rgba(0, 0, 0, 0.5)"
>
    Ethereum Improvement Proposal Insight
</Heading>
<Text 
    fontSize={{ base: "lg", md: "2xl" }} 
    fontWeight="medium" 
    mb={6} 
    color="gray.200"
    textShadow="1px 1px 4px rgba(0, 0, 0, 0.4)"
>
    Track EIPs, ERCs, and RIPs effortlessly with our powerful tools.
</Text>


                <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
                    <Button as="a" href="/dashboard" leftIcon={<FaPlus />} colorScheme="blue" variant="solid" px={6} borderRadius="full">
                        Dashboard
                    </Button>
                    <Button leftIcon={<FaRegBookmark />} colorScheme="blue" variant="solid" px={6} borderRadius="full">
                        January Insight
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default HeroSection;
