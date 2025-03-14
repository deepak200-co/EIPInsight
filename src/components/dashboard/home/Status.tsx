import { Box, Button, Flex, Grid, GridItem, Tag, Text } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { doughnutData, doughnutOptions } from "@/constant/doughnutUtils";
import { barCardData } from "@/constant/barUtils";
import BarChart from "@components/charts/BarChart";

const Status = () => {
    return (
        <Box mt={5}>
            <Grid
                templateColumns={{ base: "1fr", lg: "repeat(10, 1fr)" }}
                gap={4}
                alignItems="start"
            >
                <GridItem
                    order={{ base: 2, lg: 1 }}
                    colSpan={{ base: 10, lg: 4 }}
                    borderRadius="20px"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    bg="white"
                    boxShadow="lg"
                    position={{ lg: "sticky" }}
                    top="10px"
                    alignSelf="start"
                >
                    <Flex justifyContent="space-between" alignItems="center" mb={4} width="100%">
                        <Text fontSize="2xl" fontWeight="bold" color="black">
                            Status Overview
                        </Text>
                        <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                            918
                        </Tag>
                    </Flex>
                    <Text fontSize="md" color="black" textAlign="center" mb={4}>
                        Breakdown of current system and component statuses.
                    </Text>
                    <Box width="80%">
                        <Doughnut data={doughnutData} options={doughnutOptions} />
                    </Box>
                </GridItem>
                
                <GridItem
                    order={{ base: 1, lg: 2 }}
                    colSpan={{ base: 10, lg: 6 }}
                    borderRadius="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    gap={4}
                >
                    {barCardData.map((card, index) => (
                        <Box
                            key={index}
                            borderRadius="20px"
                            p={6}
                            bg="white"
                            boxShadow="lg"
                            width="100%"
                        >
                            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                                <Flex alignItems="center" gap={3}>
                                    <Text fontSize="xl" fontWeight="bold" color="gray.700">
                                        {card.heading}
                                    </Text>
                                    <Tag variant="solid" rounded="full" colorScheme="blue" px={3}>
                                        {card.tag}
                                    </Tag>
                                </Flex>
                                <Button size="sm" colorScheme="blue" variant="outline">
                                    Download CSV
                                </Button>
                            </Flex>
                            <Text fontSize="md" color="gray.600" mb={4}>
                                {card.description}
                            </Text>
                            <BarChart data={card.data} options={card.options} />
                        </Box>
                    ))}
                </GridItem>
            </Grid>
        </Box>
    );
}
export default Status;
