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
    <Flex direction="column" pos='fixed' top='0' w='100%' bgColor={colorMode === "light" ? "gray.100" : "gray.700"} opacity='98%'>
      <Flex justify="space-between" align="baseline" w="100%" >
        {shit('row',true,cdisplay)}
        <IconButton
          aria-label="Menu"
          size="lg"
          mx={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => cdisplay("flex")}
          color={colorMode === "light" ? "black" : "white"}
          bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
          my={2}

            ml={4}
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
        {shit('column',false,cdisplay)}
        </Flex>
      </Flex>
    </Flex>
  );
}

function shit (direction:any,ham:any,cdisplay:any){
  const full=["none", "none", "flex", "flex"]
  const min=["flex", "flex", "none", "none"]
  const mdirection=ham?full:min;
  const { colorMode, toggleColorMode } = UCM();


  return (

    <Flex display={mdirection} direction={direction}>
          <Link href="#top" passHref>
            <Button
              variant="ghost"
              m={4}
              color=  {colorMode === "light" ? "black" : "white"}
              fontSize="28"
              fontWeight="300"
              w="100%"
              h={12}
              _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
              onClick={() => cdisplay("none")}
            >
              Home
            </Button>
          </Link>
          <Link href='#about' passHref>
          <Button
          variant='ghost'
            m={4}
            color=  {colorMode === "light" ? "black" : "white"}
            fontSize="28"
            fontWeight="300"
            w="100%"
            h={12}
            _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
            onClick={() => cdisplay("none")}
          >
            About Us
          </Button>
          </Link>

          <Link href='#tech' passHref>
          <Button
          variant='ghost'
            m={4}
            color=  {colorMode === "light" ? "black" : "white"}
            fontSize="28"
            fontWeight="300"
            w="100%"
            h={12}
            _hover={{ bg: "#FFFFFF",color:'#6C757D' }}
            onClick={() => cdisplay("none")}
          >
            Technology
          </Button>
          </Link>
        </Flex>
  )
}