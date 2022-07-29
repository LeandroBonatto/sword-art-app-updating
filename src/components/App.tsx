import { useState} from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CharactersScreen } from "../screens/CharactersScreen";
import { WinnerScreen } from "../screens/WinnerScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { BattlegroundScreen } from "../screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//react application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
//return JSX and be exported from a file
//Try to abstain from default export

//Let's create a functionality that only when user logged in as admin,
//we can see the character list, otherwise we see the simple message like
//"You are not logged in"
export const App = () => {
  const [winner, setWinner] = useState(null);
  const { response, error} = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if(error && error instanceof Error) {
    //We can use React.Fragment instead of div
    //In react we can not render objects or arrays
    return <>Error: {error.message} </>;
  }
  console.log("Selected characters", battleCharacters);

  return (
  <div className="App" >
    <BrowserRouter>
      <Routes>
          <Route 
          path="/" 
          element={<LoginScreen/>}
          />
          <Route 
          path="/characters" 
          element={<CharactersScreen />}
          />
          <Route 
            path="/winner" 
            element={<WinnerScreen winner={winner} />} 
          />
          <Route 
            path="/battleground" 
            element={
              <BattlegroundScreen 
                setWinner={setWinner} 
                winner={winner}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
  );
};
