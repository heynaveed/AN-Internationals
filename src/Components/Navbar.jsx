import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { HiBars3BottomRight } from 'react-icons/hi2';
import { CiSearch,CiGift } from "react-icons/ci"
import {IoNotificationsOutline} from "react-icons/io5"
import {BsChatLeftText,BsChevronDown} from "react-icons/bs"
import {TfiSettings} from "react-icons/tfi"

export default function Navbar() {
    return (
        <Box h={"120px"} display={"flex"} alignItems={"center"} bg={"#FFFFFF"}>
            <Box w={"18%"} h={"100%"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Box h={"45%"} w={"20%"} borderRadius={"50%"} bgGradient={"linear(to-r, teal.500, green.500)"}></Box>
                <Text fontFamily={"heading"} fontStyle={"normal"} fontWeight={"800"} color={"#3E3F7A"} fontSize={"32px"}mr={"20px"}>Sales</Text>
                <HiBars3BottomRight fontSize={"30px"} />
            </Box>

            <Box display={"flex"} justifyContent={"space-evenly"} w={"82%"} alignItems={"center"}>
                <Box textAlign={"left"} w={"20%"}>
                    <Text fontFamily={"heading"} fontWeight={"600"} fontSize={"24px"}>Dashboard</Text>
                    <Text color={"#969BA0"}>Welcome to Davur Admin!</Text>
                </Box>
                <Box display={"flex"} borderRadius={"25px"} bg={"#FDFDFD"} padding={"10px"} w={"20%"}>
                    <Input variant='unstyled' placeholder='Search here' />
                    <CiSearch fontSize={"22px"} />
                </Box>
                <Flex color="#4C8147" fontSize={"22px"} justifyContent={"space-between"} w={"20%"}>
                    <IoNotificationsOutline />
                    <BsChatLeftText />
                    <CiGift/>
                    <TfiSettings/>
                </Flex>
                <Flex w={"20%"} h={"100%"} alignItems={"center"} justifyContent={"space-evenly"}>
                <Box w={"45px"} h={"45px"} borderRadius={"50%"} bg={"#C4C4C4"}></Box>
                <Box textAlign={"left"}>
                    <Text fontFamily={"heading"} fontWeight={"600"}>Brain Lee</Text>
                    <Text color={"#969BA0"} fontSize={"14px"}>Admin</Text>
                </Box>
                <BsChevronDown fontSize={"20px"}/>
                </Flex>
            </Box>
        </Box>
    )
}