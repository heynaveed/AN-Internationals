import { Box, Flex, Text } from "@chakra-ui/react";

export default function Frameheader() {
    return (
        <Flex w={"80%"} m={"auto"} mt={"10px"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box  bg={"#FFFFFF"} border={"1px solid #E9E9EF"} w={"23%"} textAlign={"left"} padding={"1rem"} borderRadius={"5px"} >
                <Flex>
                    <Box>
                        <Text color={"#74788D"} fontSize={"12px"}>My Wallet</Text>
                        <Text color={"#495057"} fontSize={"19px"} fontWeight={"600"}>$865.2k</Text>
                    </Box>
                    <Box>
                    </Box>
                </Flex>
                <Flex alignItems={"center"}>
                    <Text bg={"#2AB57D40"} color={"#2AB57D"} fontSize={"9px"} padding={"2px"} borderRadius={"5px"}> +$20.9k </Text>
                    <Text color={"#74788D"} fontSize={"12px"} ml={"8px"}>Since last week</Text>
                </Flex>
            </Box>

            <Box bg={"#FFFFFF"} border={"1px solid #E9E9EF"} w={"23%"} textAlign={"left"} padding={"1rem"} borderRadius={"5px"} >
                <Flex>
                    <Box>
                        <Text color={"#74788D"} fontSize={"12px"}>Number of Trades</Text>
                        <Text color={"#495057"} fontSize={"19px"} fontWeight={"600"}>$865.2k</Text>
                    </Box>
                    <Box>
                    </Box>
                </Flex>
                <Flex alignItems={"center"}>
                    <Text bg={"#FD625E40"} color={"#FD625E"} fontSize={"9px"} padding={"2px"} borderRadius={"5px"}> -29 Trades </Text>
                    <Text color={"#74788D"} fontSize={"12px"} ml={"8px"}>Since last week</Text>
                </Flex>
            </Box>

            <Box bg={"#FFFFFF"} border={"1px solid #E9E9EF"} w={"23%"} textAlign={"left"} padding={"1rem"} borderRadius={"5px"} >
                <Flex>
                    <Box>
                        <Text color={"#74788D"} fontSize={"12px"}>Invested Amount</Text>
                        <Text color={"#495057"} fontSize={"19px"} fontWeight={"600"}>$4.32M</Text>
                    </Box>
                    <Box>
                    </Box>
                </Flex>
                <Flex alignItems={"center"}>
                    <Text bg={"#2AB57D40"} color={"#2AB57D"} fontSize={"9px"} padding={"2px"} borderRadius={"5px"}> +$2.8k </Text>
                    <Text color={"#74788D"} fontSize={"12px"} ml={"8px"}>Since last week</Text>
                </Flex>
            </Box>

            <Box bg={"#FFFFFF"} border={"1px solid #E9E9EF"} w={"23%"} textAlign={"left"} padding={"1rem"} borderRadius={"5px"} >
                <Flex>
                    <Box>
                        <Text color={"#74788D"} fontSize={"12px"}>Profit Ratio</Text>
                        <Text color={"#495057"} fontSize={"19px"} fontWeight={"600"}>12.57%</Text>
                    </Box>
                    <Box>
                    </Box>
                </Flex>
                <Flex alignItems={"center"}>
                    <Text bg={"#2AB57D40"} color={"#2AB57D"} fontSize={"9px"} padding={"2px"} borderRadius={"5px"}> +2.95% </Text>
                    <Text color={"#74788D"} fontSize={"12px"} ml={"8px"}>Since last week</Text>
                </Flex>
            </Box>
        </Flex>
    )
}