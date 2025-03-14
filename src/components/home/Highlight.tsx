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
                "Gain valuable insights through advanced analytics to drive informed decisions and optimize your strategy.",
            icon: MdAssessment,
        },
        {
            title: "Editors Leaderboard",
            description:
                "Highlight top contributors with the Editors Leaderboard, encouraging active participation and fostering a competitive environment.",
            icon: MdLeaderboard,
        },
        {
            title: "Boards",
            description:
                "Organize tasks and streamline teamwork with customizable boards that allow smooth collaboration and progress tracking.",
            icon: MdGridOn,
        },
        {
            title: "Search By Author",
            description:
                "Quickly find content or contributions by specific authors, saving time and enhancing your ability to access relevant information.",
            icon: MdPersonSearch,
        },
        {
            title: "All EIPs",
            description:
                "Explore all Ethereum Improvement Proposals (EIPs) in one place, keeping you up to date with the latest changes and innovations.",
            icon: MdDescription,
        },
        {
            title: "EIP Proposal Builder",
            description:
                "Easily create and submit EIP proposals with our intuitive builder, streamlining the proposal process and encouraging contribution.",
            icon: MdBuild,
        },
    ];

    return (
        <Box as="section" py={16} px={6} bg={"#05070a"} color={"white"}>
            <Stack direction={"column"} alignItems={"center"} gap={3} pt={6}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading textAlign="center" as="h2" size="2xl" fontWeight="bold">
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
                        textAlign="center"
                        width={{ md: "80%", lg: "60%" }}
                        color="gray.300"
                    >
                        Experience unmatched performance, reliability, and innovation. Benefit from seamless efficiency,
                        constant updates, and responsive support, all designed to enhance your productivity and success.
                    </Text>
                </motion.div>
            </Stack>

            <Box p={3} maxW="1200px" mt={8} mx="auto">
                <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                    {features.map((feature, index) => (
                        <MotionGridItem
                            key={index}
                            borderRadius="15px"
                            p={6}
                            display="flex"
                            flexDirection="column"
                            alignItems="start"
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
