import React from "react";
import "./App.css";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import Draggable from "react-draggable";
import thala from "./assets/thala.png";
// Import other images
import image1 from "./assets/samosa1.png";
import image2 from "./assets/ladoo1.png";
import image3 from "./assets/ratala1.png";
import image4 from "./assets/sabudanavada.png";
import image5 from "./assets/roti.png";
import image6 from "./assets/fish1.png";

function App() {
  return (
    <Box className="App">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
        fontWeight="extrabold"
      >
        Khana for a reason
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }} // Column in mobile, row in tablet and desktop
        justify="center"
        align="center"
        height="100vh"
        wrap="wrap"
      >
        {/* Food items (left/right on desktop, top on mobile) */}
        <Flex
          direction={{ base: "row", md: "row", lg: "column" }}
          align="center"
          m={4}
        >
          <Draggable>
            <Image
              src={image1}
              alt="Samosa"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
          <Draggable>
            <Image
              src={image2}
              alt="Ladoo"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
          <Draggable>
            <Image
              src={image3}
              alt="Ratala"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
        </Flex>

        {/* Central image */}
        <Image
          src={thala}
          alt="Central"
          boxSize={{ base: "300px", md: "400px", lg: "550px" }}
          mx="20px"
        />

        {/* Food items (right/left on desktop, bottom on mobile) */}
        <Flex
          direction={{ base: "row", md: "row", lg: "column" }}
          align="center"
          m={4}
        >
          <Draggable>
            <Image
              src={image4}
              alt="Sabudana Vada"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
          <Draggable>
            <Image
              src={image5}
              alt="Roti"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
          <Draggable>
            <Image
              src={image6}
              alt="Fish"
              boxSize={{ base: "50px", md: "70px", lg: "100px" }}
            />
          </Draggable>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
