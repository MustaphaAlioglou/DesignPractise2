import {
  useColorMode as UCM,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function ee() {
  const { colorMode, toggleColorMode } = UCM();
  const isDark = colorMode === "dark";
  const [mdisplay, cdisplay] = useState("none");

  return (
    <Flex direction="column">
      <Flex justify="space-between" align="baseline" w="100%" p={2}>
        {shit('row',true)}
        <IconButton
          aria-label="Menu"
          size="lg"
          mx={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => cdisplay("flex")}
          color={colorMode === "light" ? "black" : "white"}
          bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
        />
        <Flex>
          <Switch
            size="lg"
            color="blue.500"
            isChecked={isDark}
            onChange={toggleColorMode}
            mr={4}
          />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        display={mdisplay}
        top="0"
        left="0"
        pos="fixed"
        zIndex="10"
        bgColor={colorMode === "light" ? "white" : "gray.900"}
      >
        <Flex justify="flex-start">
          <IconButton
            onClick={() => cdisplay("none")}
            size="lg"
            aria-label="Close"
            icon={<CloseIcon />}
            mt={2}
            ml={4}
            color={colorMode === "light" ? "black" : "white"}
            bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
          />
        </Flex>

        <Flex direction="column" align="center" w="100vw" h="100vh" zIndex={20}>
        {shit('column',false)}
        </Flex>
      </Flex>
    </Flex>
  );
}

function shit (direction:any,ham:any){
  const full=["none", "none", "flex", "flex"]
  const min=["flex", "flex", "none", "none"]
  const mdirection=ham?full:min;
  const { colorMode, toggleColorMode } = UCM();

  return (

    <Flex display={mdirection} direction={direction}>
          <Link href="www.google.com" passHref>
            <Button
              variant="ghost"
              m={4}
              color=  {colorMode === "light" ? "black" : "white"}
              fontSize="28"
              fontWeight="400"
              w="100%"
              h={12}
              _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
            >
              Home
            </Button>
          </Link>
          <Link href='www.google.com' passHref>
          <Button
          variant='ghost'
            m={4}
            color=  {colorMode === "light" ? "black" : "white"}
            fontSize="28"
            fontWeight="400"
            w="100%"
            h={12}
            _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
          >
            About Us
          </Button>
          </Link>
          <Link href='www.google.com' passHref>
          <Button
          variant='ghost'
            m={4}
            color=  {colorMode === "light" ? "black" : "white"}
            fontSize="28"
            fontWeight="400"
            w="100%"
            h={12}
            _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
          >
            Technology
          </Button>
          </Link>
        </Flex>
  )
}