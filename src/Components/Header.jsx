import { Box, Flex, Text } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci"

export default function Header() {
    return (
        <Flex border={"1px solid #EAEAEA"} bg={"#FFFFFF"} w={"80%"} m={"auto"} mt={"10px"} padding={"1rem"} h={"100px"} justifyContent={"space-between"} alignItems={"center"}>
            <Box textAlign={"left"}>
                <Text fontSize={"26px"} fontWeight={"600"} fontFamily={"heading"}>Welcome back</Text>
                <Text color={"#6F6F6F"}>Tagline</Text>
            </Box>
            <Flex border={"1px solid #D8D8D8"} bg={"#FFFFFF"} h={"32px"} w={"50%"} borderRadius={"6px"} alignItems={"center"} padding={"10px"}>
                <CiCalendar color="#6F6F6F" />
                <Text ml={"10px"}>4/15 05:00 AM - 4/16 01:00 PM</Text>
            </Flex>
        </Flex>
    )
}