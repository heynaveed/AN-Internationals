import { Box, Flex, Text } from "@chakra-ui/react";
import { TfiHome } from "react-icons/tfi"
import { SlNote, SlPeople } from "react-icons/sl"
import { CiGrid41, CiDesktop } from "react-icons/ci"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Sidebar() {
    return (
        <>
            <Box w={'18%'} bg={"#FFFFFF"}>
                <Flex w={"80%"} bg={"#1A4645"} color={"#FFFFFF"} borderRadius={"25px"} padding={"1rem"} m={"auto"} alignItems={"center"} mt={"20px"} >
                    <TfiHome fontSize={"25px"} />
                    <Text ml={"10px"} fontWeight={"600"}>Dashboard</Text>
                </Flex>
                <br />
                <Flex w={"80%"} m={"auto"} padding={"1rem"}>
                    <SlNote fontSize={"22px"} />
                    <Text ml={"10px"} color={"#7C7C7C"}>Leads</Text>
                    <Box ml={"10px"} bg={"#1A4645"} color={"#FFFFFF"} borderRadius={"25px"} w={"35px"}>25</Box>
                </Flex>
                <br />
                <Accordion defaultIndex={[5]} allowMultiple width={"80%"} m={"auto"} >
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' display={"Flex"}>
                                    <CiGrid41 fontSize={"25px"} />
                                    <Text ml={"10px"} color={"#7C7C7C"}>Deals</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#7C7C7C"}>
                            Deals
                        </AccordionPanel>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' display={"Flex"}>
                                    <CiGrid41 fontSize={"25px"} />
                                    <Text ml={"10px"} color={"#7C7C7C"}>Contacts</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#7C7C7C"}>
                            Contacts                        </AccordionPanel>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' display={"Flex"}>
                                    <SlPeople fontSize={"25px"} />
                                    <Text ml={"10px"} color={"#7C7C7C"}>Calendars</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#7C7C7C"}>
                            Activities
                        </AccordionPanel>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' display={"Flex"}>
                                    <CiDesktop fontSize={"25px"} />
                                    <Text ml={"10px"} color={"#7C7C7C"}>Analytics</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#7C7C7C"}>
                            Analytics
                        </AccordionPanel>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' display={"Flex"}>
                                    <CiDesktop fontSize={"25px"} />
                                    <Text ml={"10px"} color={"#7C7C7C"}>Setting</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} color={"#7C7C7C"}>
                            Setting
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Box>
        </>
    )
}