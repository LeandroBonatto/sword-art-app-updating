import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//we check diretory relative to the file 
import { App } from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginScreen } from './screens/LoginScreen';
import { WinnerScreen } from './screens/WinnerScreen';

//Creates a root element in the DOM
//React DOM library is used to interact with the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/characters" element={<CharactersScreen/>}/>
        <Route path="/winner" element={<WinnerScreen/>}/>
        <Route path="/battleground" element={<BattlegroundScreen/>}/>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

