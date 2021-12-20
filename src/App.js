import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Favorito from './paginas/Favorito';
import Home from './paginas/Home';
import Show from './paginas/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {



  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/favorito"><Favorito/></Route>
        <Route exact path="/show/:id"><Show/></Route>
        <Route><div>Pagina no encontrada</div></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
