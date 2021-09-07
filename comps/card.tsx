import React from "react";
import {
  Image,
  Text,
  Flex,
  Box,
  SimpleGrid,
  Img,
  useColorMode,
} from "@chakra-ui/react";

export default function shit(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Box w="390px" h="auto" align="center">
        <Image
          src={props.image}
          alt=""
          objectFit="scale-down"
          boxSize="100px"
          _hover={{
            color: "black",
          }}
        />
        <Text
          color={colorMode === "light" ? "black" : "white"}
          fontWeight="350"
          align="center"
          fontSize="38px"
        >
          {props.title}
        </Text>
        <Text
          color={colorMode === "light" ? "black" : "white"}
          fontWeight="300"
          align="center"
          maxW="85%"
        >
          {props.desc}
        </Text>
      </Box>
    </React.Fragment>
  );
}
