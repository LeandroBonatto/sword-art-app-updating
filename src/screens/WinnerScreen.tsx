import React from "react";
import { Text } from '@chakra-ui/react';

export const WinnerScreen = () => {
    return (
        <>
            <Text> fontSize={"5xl"} fontWeight"800">
                Winner of the battle is {winner}
            </Text>
            <Button>Go back to character screen</Button>
        </>
    )
}