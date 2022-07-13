import React, {useState} from "react";
import { Box, Text, Flex, useInterval } from "@chakra-ui/react";

export const Battleground = ({ battleCharacters, setWinner }) => {
    const [fighter1, fighter2] = battleCharacters;
    const [firstFighterState, setFirstFighterState] = useState(fighter1);
    const [secondFighterState, setSecondFighterState] = useState(fighter2);
    const [firstAttacks, setFirstAttacks] = useState(false);
    const [sencondAttacks, setSecondAttacks] = useState(false);

    const handleFightersClash = () => {
        setSecondAttacks(false);
        setFirstAttacks(true);
        if (secondFighterState.health - firstFighterState.damagePerHit <= 0) {
            setWinner(firstFighterState.name);
        }
        //we need to check prior to the state update, because state update is async
        setSecondFighterState({
            ...secondFighterState,
            health: secondFighterState.health - firstFighterState.damagePerHit,
        });
        setTimeout(() => handleSecondFighterAttack(), 2000);
    };

    useInterval(handleFightersClash, 4000);

    const handleSecondFighterAttack = () => {
        setFirstAttacks(false)
        setSecondAttacks(true)
        if (firstFighterState.health - secondFighterState.damagePerHit <= 0) {
            setWinner(secondFighterState.name);
        }
        //we need to check prior to the state update, because state update is async
        setFirstFighterState({
            ...firstFighterState,
            health: firstFighterState.health - secondFighterState.damagePerHit,
        });
    }

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
            {sencondAttacks ? (
            <Box w="80%" h="100%" mt="3%" border="0.5rem solid black">
            <text mt="2%" fontSize={"2xl"} fontWeight="600" >
                {firstFighterState.name} strikes {secondFighterState.name} for{" "}
                {firstFighterState.damagePerHit}
            </text>
            ) : null}
            {sencondAttacks ? (
            <text mt="35%" fontSize={"2xl"} fontWeight="500" >
                {secondFighterState.name} strikes {firstFighterState.name} for{" "}
                {secondFighterState.damagePerHit}
            </text>
            ) : null}
            </Box>
        </Flex>
    );
};