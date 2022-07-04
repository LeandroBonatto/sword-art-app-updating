import React from 'react'
import { CharacterListItem } from './CharacterListItem/CharacterListItem';
import { Table, TableCaption, Thead, Tr, Th } from "@chakra-ui/react"
import "./CharacterList.css";

// Props are passed to the component via attributes
export const CharacterList = (characters) => {
    //returns true if math.random is more than 0.5
  return (
    <Table>
        <TableCaption>Imperial to metric conversion Factors</TableCaption>
    <Thead>
      <tr>
        <th>To convert</th>
      </tr>
    </Thead>


        {characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
        ))}
    </Table>
  );
};
