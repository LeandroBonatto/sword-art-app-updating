import React from "react";
import { Button, Text } from '@chakra-ui/react';

export const WinnerScreen = ({ winer, setFightStart }) => {
    return (
        <>
            <Text> fontSize={"5xl"} fontWeight"800">
                Winner of the battle is {winner}
            </Text>
            <Button mt="3%" onClick={() => setFightStart}>
                Go back to character screen
            </Button>
        </>
    )
}