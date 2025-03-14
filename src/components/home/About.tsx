import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Center>
            <Box as="section" py={12} px={6} textAlign="center" width="100%">
                <Box maxW="800px" mx="auto">
                    <Stack direction={"column"} alignItems={"center"} gap={3} textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Heading as="h2" size={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="bold">
                                Introducing EIPsInsight: Your Ethereum Guide
                            </Heading>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Text
                                mt={2}
                                color={"gray.400"}
                                fontSize={{ base: "md", md: "lg" }}
                                maxW="700px"
                            >
                                EIPsInsight provides specialized tooling designed to give clear, visual insights into the
                                activity of Ethereum Improvement Proposals (EIPs), Ethereum Request for Comments (ERCs), and
                                Rollup Improvement Proposals (RIPs). Track progress, workload distribution among EIP Editors,
                                and ensure transparency in the proposal review process.
                            </Text>
                        </motion.div>
                    </Stack>
                </Box>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Box
                        mt={10}
                        width={{ base: "90%", md: "60%", lg: "50%" }}
                        mx="auto"
                        borderRadius="15px"
                        overflow="hidden"
                        boxShadow="lg"
                    >
                        <ReactPlayer
                            url="https://youtu.be/AyidVR6X6J8"
                            width="100%"
                            height="300px"
                            controls
                        />
                    </Box>
                </motion.div>
            </Box>
        </Center>
    );
};

export default About;
