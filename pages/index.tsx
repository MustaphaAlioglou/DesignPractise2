import type { NextPage } from "next";
import {
  Image,
  Text,
  Flex,
  Box,
  SimpleGrid,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import Card from "../comps/card";
import Menu from "../comps/menu";

const logo = `https://goofy-visvesvaraya-d39af3.netlify.app/static/media/main-logo.37805b5b.png`;

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="center"
      direction="column"
      bgColor={colorMode === "light" ? "white" : "gray.800"}
      id="top"
      w='100%'
      
    >
      <Menu/>
      <Flex minH="400px" direction="column" align="center" mt={12} pt={10} >
        <Image
          src={logo}
          alt=""
          objectFit="cover"
          boxSize={[300, 300, 400, 500]}
        />
        <Flex justify='end'>

        <Text
          align="center"
          fontSize={[60,70,60,85]}
          fontWeight="300"
          color={colorMode === "light" ? "black" : "white"}
        >
          Putting the AI in drive
        </Text>
        </Flex>
      </Flex>

      <Flex
        p={[4,10,20,20]}
        minH="350px"
        direction="column"
        align="center"
        bgGradient="linear(to-r, #4032EE, #941DE3)"
      >
        <Text
          align="center"
          as="h2"
          fontWeight="300"
          fontSize="60px"
          color="white"
          id="about"
        >
          About us
        </Text>
        <Text
          as="h3"
          fontWeight="300"
          fontSize="20px"
          align="center"
          color="white"
        >
          With draive we aspire to achieve fully autonomous driving. To get
          there, we are building our own, modular and highly efficient, platform
          that manages the entire training process while still being viable for
          use in real world scenarios. Though a daunting task, that even
          corporate giants are still struggling with, we are slowly tackling it
          with the utmost professionalism, passion, and consciousness.
        </Text>
      </Flex>
      <Flex p={[4,10,20,20]} minH="350px" direction="column" align="center" id="tech">
        <Text
          color={colorMode === "light" ? "black" : "white"}
          align="center"
          as="h2"
          fontWeight="300"
          fontSize="60px"
        >
          Technology
        </Text>
        <Text
          color={colorMode === "light" ? "black" : "white"}
          as="h3"
          fontWeight="400"
          fontSize="20px"
          align="center"
        >
          Draive utilizes a healthy mix of cutting-edge and well-established
          technologies that pair well together
        </Text>
      </Flex>

      <Flex  minH="400px" direction="column" align="center"  my={10} >
        <SimpleGrid columns={[1, null, 2]} spacing="7">
          <Card
            image="https://avatars.githubusercontent.com/u/4201559?s=200&v=4"
            title="Project Reactor"
            desc="Draive is an end-to-end data streaming application, enabled by 
  project reactor and reactive programming."
          />
          <Card
            image="https://cdn.freebiesupply.com/logos/large/2x/rabbitmq-logo-png-transparent.png"
            title="RabbitMQ"
            desc="A lightweight message broker, utilized to connect all our microservices in a scalable manner."
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
            title="Project Reactor"
            desc="Reliable, battle-tested database for 'memory replays' and analytics."
          />
          <Card
            image="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"
            title="Docker"
            desc="Critical systems have to be deterministic, this begins with deploying
   draive as a collection of containers."
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
