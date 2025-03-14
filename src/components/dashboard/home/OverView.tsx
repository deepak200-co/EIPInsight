// import { Box, Flex, Grid, GridItem, Icon, Tag, Text } from "@chakra-ui/react";
// import { FiCheckCircle } from "react-icons/fi";
// import { IoIosDocument } from "react-icons/io";
// import { CiCircleAlert, CiSearch } from "react-icons/ci";
// import BarChart from "@components/charts/BarChart";
// import { barData, barOptions } from "@/constant/barUtils";

// const OverView = () => {
//     return (
//         <Box mt={5}>
//             <Grid
//                 templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "4fr 5fr" }}
//                 gap={6}
//             >
//                 <GridItem>
//                     <Grid
//                         p={5}
//                         templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
//                         gap={4}
//                     >
//                         {[{
//                             icon: FiCheckCircle,
//                             count: "4",
//                             label: "Final EIPs",
//                             color: "green"
//                         }, {
//                             icon: IoIosDocument,
//                             count: "11",
//                             label: "Draft EIPs",
//                             color: "blue"
//                         }, {
//                             icon: CiSearch,
//                             count: "7",
//                             label: "Review EIPs",
//                             color: "yellow"
//                         }, {
//                             icon: CiCircleAlert,
//                             count: "10",
//                             label: "Stagnant EIPs",
//                             color: "red"
//                         }].map((item, index) => (
//                             <Box
//                                 key={index}
//                                 borderRadius="xl"
//                                 shadow="lg"
//                                 overflow="hidden"
//                                 borderWidth="1px"
//                                 borderColor="gray.300"
//                                 minW={{ base: "140px", md: "160px" }}
//                             >
//                                 <Box
//                                     p={5}
//                                     bgGradient={`linear(to-r, ${item.color}.400, ${item.color}.600)`}
//                                     color="white"
//                                     textAlign="center"
//                                 >
//                                     <Icon as={item.icon} boxSize={7} mb={2} />
//                                     <Text fontSize="3xl" fontWeight="bold">
//                                         {item.count}
//                                     </Text>
//                                     <Text fontSize="md" fontWeight="medium">
//                                         {item.label}
//                                     </Text>
//                                 </Box>
//                             </Box>
//                         ))}
//                     </Grid>
//                 </GridItem>
//                 <GridItem>
//                     <Box p={6} borderRadius="xl" shadow="lg" bg="white" maxW={{ base: "100%", md: "100%" }}>
//                         <Flex alignItems="center" justifyContent="space-between" mb={4}>
//                             <Text fontSize="xl" fontWeight="bold" color="black">
//                                 All EIPs
//                             </Text>
//                             <Tag variant="solid" rounded="full" colorScheme="blue" px={4} py={1}>
//                                 918
//                             </Tag>
//                         </Flex>
//                         <Box height="300px">
//                             <BarChart data={barData} options={{ ...barOptions, maintainAspectRatio: false }} />
//                         </Box>
//                     </Box>
//                 </GridItem>
//             </Grid>
//         </Box>
//     );
// };

// export default OverView;

import { Box, Flex, Grid, GridItem, Icon, Tag, Text } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosDocument } from "react-icons/io";
import { CiCircleAlert, CiSearch } from "react-icons/ci";
import BarChart from "@components/charts/BarChart";
import { barData, barOptions } from "@/constant/barUtils";

const OverView = () => {
  return (
    <Box mt={5} w="full">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "4fr 5fr" }}
        gap={6}
      >
        {/* EIP Cards Section */}
        <GridItem w="full">
          <Grid
            p={{ base: 3, md: 5 }}
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={4}
          >
            {[
              { icon: FiCheckCircle, count: "4", label: "Final EIPs", color: "green" },
              { icon: IoIosDocument, count: "11", label: "Draft EIPs", color: "blue" },
              { icon: CiSearch, count: "7", label: "Review EIPs", color: "yellow" },
              { icon: CiCircleAlert, count: "10", label: "Stagnant EIPs", color: "red" }
            ].map((item, index) => (
              <Box
                key={index}
                borderRadius="xl"
                shadow="lg"
                overflow="hidden"
                borderWidth="1px"
                borderColor="gray.300"
                w="full"
              >
                <Box
                  p={{ base: 3, md: 5 }}
                  bgGradient={`linear(to-r, ${item.color}.400, ${item.color}.600)`}
                  color="white"
                  textAlign="center"
                >
                  <Icon as={item.icon} boxSize={7} mb={2} />
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                    {item.count}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    {item.label}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </GridItem>

        {/* Bar Chart Section */}
        <GridItem w="full">
          <Box p={{ base: 4, md: 6 }} borderRadius="xl" shadow="lg" bg="white" w="full">
            <Flex alignItems="center" justifyContent="space-between" mb={4}>
              <Text fontSize="xl" fontWeight="bold" color="black">
                All EIPs
              </Text>
              <Tag variant="solid" rounded="full" colorScheme="blue" px={4} py={1}>
                918
              </Tag>
            </Flex>
            <Box w="100%" height={{ base: "250px", md: "300px" }}>
              <BarChart data={barData} options={{ ...barOptions, maintainAspectRatio: false, responsive: true }} />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OverView;
