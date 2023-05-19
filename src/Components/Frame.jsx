import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Frameheader from "./Frameheader";

export default function Frame(){
    return(
       <Box width={"82%"} bg={"#F9F9F9"}>
           <Header/>
           <Frameheader/>
       </Box>
    )
}