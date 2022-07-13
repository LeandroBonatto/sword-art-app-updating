import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export const Battleground = ({ battleCharacters }) => {
    return (
        <Flex justify={"center"}align={"center"} direction={"column"} h="90vh">
            <text mt="2%" fontSize={"3xl"} fontWeight="700" >
            Let's get ready to the fight
            </text>
            <Box w="80%" h="100%" mt="5%" border="0.5rem solid black">
            <text mt="5%" fontSize={"2xl"} fontWeight="600" >
            Let's get ready to the fight
            </text>
            <text mt="38%" fontSize={"2xl"} fontWeight="600" >
            Let's get ready to the fight
            </text>
            </Box>
        </Flex>
    );
};