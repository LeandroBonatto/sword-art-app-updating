import React from 'react'
import { CharacterListItem } from './CharacterListItem/CharacterListItem';
import { Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react"
import "./CharacterList.css";
import { useSelector } from "react-redux";


// Props are passed to the component via attributes

//To implement character creation and deletion we need to do these things:
//1. We need to create Add/Update screen which will be responsible for taking input for create/update
//2. We need to implement delete button on each row of the table
//3. We need to implement appropriate actions in our characters slice of the state
//4. We need to have a button to create new character 
export const CharacterList = () => {
  //by using useSelector we basically get small piece of data from the srote
  //and we subscribe to it
  const characters = useSelector((state) => state.character.characterList);
    //returns true if math.random is more than 0.5
  return (
    <Table>
        <TableCaption>Character Table</TableCaption>
      <Thead>
        <tr>
          <th>Name</th>
          <th isNumeric>Helath</th>
          <th>Fraction</th>
          <th>Weapon</th>
          <th isNumeric>Damage per Hit</th>
        </tr>
        </Thead>
        <Tbody>
          {characters.map((character) => (
            <CharacterListItem 
              isChampion={Math.random() > 0.5} 
              character={character}  
            />
          ))}
        </Tbody>
    </Table>
  );
};
