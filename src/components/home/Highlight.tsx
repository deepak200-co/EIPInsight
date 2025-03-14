import { Box, Grid, GridItem, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    MdAssessment,
    MdBuild,
    MdDescription,
    MdGridOn,
    MdLeaderboard,
    MdPersonSearch,
} from "react-icons/md";

const MotionGridItem = motion(GridItem);

const Highlight = () => {
    const features = [
        {
            title: "Analytics",
            description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.",
            icon: MdAssessment,
        },
        {
            title: "Editors Leaderboard",
            description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.",
            icon: MdLeaderboard,
        },
        {
            title: "Boards",
            description:      
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.",
            icon: MdGridOn,
        },
        {
            title: "Search By Author",
            description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.",
            icon: MdPersonSearch,
        },
        {
            title: "All EIPs",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.", 
            icon: MdDescription,
        },
        {
            title: "EIP Proposal Builder",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget egestas mi. Donec molestie ligula eget gravida egestas.  ",
            icon: MdBuild,
        },
    ];

    return (
        <Box as="section" py={16} px={6} bg={"#05070a"} color={"white"} textAlign="center">
            <Box maxW="800px" mx="auto">
                <Stack direction={"column"} alignItems={"center"} gap={3} pt={6} textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Heading as="h2" size="2xl" fontWeight="bold">
                            Highlights
                        </Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <Text
                            mt={2}
                            fontSize={{ base: "sm", md: "lg" }}
                            maxW="700px"
                            mx="auto"
                            color="gray.300"
                        >
                            Experience unmatched performance, reliability, and innovation. Benefit from seamless efficiency,
                            constant updates, and responsive support, all designed to enhance your productivity and success.
                        </Text>
                    </motion.div>
                </Stack>
            </Box>

            <Box p={3} maxW="1200px" mt={8} mx="auto">
                <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                    {features.map((feature, index) => (
                        <MotionGridItem
                            key={index}
                            borderRadius="15px"
                            p={6}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            bg={"#0b0e14"}
                            borderColor={"gray.800"}
                            borderWidth={1}
                            boxShadow="lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <Box
                                borderRadius="full"
                                p={4}
                                mb={3}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bg="blue.600"
                                color="white"
                                boxShadow="0px 2px 10px rgba(0, 0, 255, 0.3)"
                            >
                                <Icon as={feature.icon} boxSize={8} />
                            </Box>
                            <Heading as="h3" fontSize="xl" mb={2} fontWeight="semibold">
                                {feature.title}
                            </Heading>
                            <Text fontSize="md" color="gray.400">
                                {feature.description}
                            </Text>
                        </MotionGridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Highlight;
