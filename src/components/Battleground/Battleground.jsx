import React, {useState} from "react";
import { Box, Text, Flex, useInterval } from "@chakra-ui/react";

export const Battleground = ({ battleCharacters, setWinner }) => {
    const [fighterOne, fighterTwo] = battleCharacters;
    const [firstAttacks, setFirstAttacks] = useState(false);
    const [sencondAttacks, setSecondAttacks] = useState(false);
    const attacksByFighterOne = useRef(0);
    const attacksByFighterTwo = useRef(0);

    const handleFightersClash = () => {
        const {name, damagePerHit} = fightOne
        setSecondAttacks(false);
        setFirstAttacks(true);
        if (fighterTwo.health - damagePerHit * attacksByFighterOne <= 0) {
            setWinner(name);
        }
        //we need to check prior to the state update, because state update is async
        setTimeout(() => handleSecondFighterAttack(), 2000);
    };

    useInterval(() => handleFightersClash(), 4000);

    const handleSecondFighterAttack = () => {
        const {name, damagePerHit} = fighterTwo
        setFirstAttacks(false)
        setSecondAttacks(true)
        if (fighterOne.health - damagePerHit * attacksByFighterTwo <= 0) {
            setWinner(secondFighterState.name);
        }
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