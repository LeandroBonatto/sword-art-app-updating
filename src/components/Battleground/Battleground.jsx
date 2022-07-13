import React, {useState} from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export const Battleground = ({ battleCharacters, setWinner }) => {
    const [fighter1, fighter2] = battleCharacters;
    const [firstFighterState, setFirstFighterState] = React.useState(fighter1);
    const [secondFighterState, setSecondFighterState] = React.useState(fighter2);
    const [winner, setWinner] = useState(null);

    const handleFirstFighterAttack = () => {
        if (secondFighterState.health - firstFighterState.damagePerHit <= 0) {
            setWinner(firstFighterState.name);
        }
        //we need to check prior to the state update, because state update is async
        setSecondFighterState({
            ...secondFighterState,
            health: secondFighterState.health - firstFighterState.damagePerHit,
        });
    };

    const handleSecondFighterAttack = () => {
        if (firstFighterState.health - secondFighterState.damagePerHit <= 0) {
            setWinner(secondFighterState.name);
        }
        //we need to check prior to the state update, because state update is async
        setSecondFighterState({
            ...firstFighterState,
            health: firstFighterState.health - secondFighterState.damagePerHit,
        });
    };
    return (
        <Flex justify={"center"}align={"center"} direction={"column"} h="90vh">
            <text mt="2%" fontSize={"3xl"} fontWeight="700" >
            Let's get ready to the fight
            </text>
            <Text mt="2%" fontSize={"2xl"} fontWeight="600">
                {firstFighterState.name} health: {firstFighterState.health}
            </Text>
            <Text mt="2%" fontSize={"2xl"} fontWeight="600">
                {secondFighterState.name} health: {secondFighterState.health}
            </Text>
            <Box w="80%" h="100%" mt="3%" border="0.5rem solid black">
            <text mt="2%" fontSize={"2xl"} fontWeight="600" >
                {firstFighterState.name} strikes {secondFighterState.name} for{" "}
                {firstFighterState.damagePerHit}
            </text>
            <text mt="35%" fontSize={"2xl"} fontWeight="500" >
                {secondFighterState.name} strikes {firstFighterState.name} for{" "}
                {secondFighterState.damagePerHit}
            </text>
            </Box>
        </Flex>
    );
};