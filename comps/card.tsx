import React from "react";
import { Image, Text, Flex, Box, SimpleGrid, Img } from "@chakra-ui/react";

export default  function shit (props:any){
    return(
    <React.Fragment>
       <Box w='400px' h='auto' align='center'> 
        <Image
        src={props.image}
        alt=''
        objectFit="scale-down"
        boxSize="100px"
 _hover={{

    color: "black",
  }}
        />
      <Text color ='black' fontWeight='350' align='center' fontSize='38px'>
      {props.title}
      </Text>
      <Text color ='black' fontWeight='300' align='center' maxW='85%'>
    {props.desc}
        </Text>
        </Box>
    </React.Fragment>)
}