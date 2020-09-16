import React from 'react';
import './App.css';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails'
import NewColorForm from './NewColorForm'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
import Header from './Header';
function App() {
  const [colors, setColors]=useLocalStorage("colors", [{name: "red", color: "#ff0000"}, {name: "green", color: "#00ff00"}, {name: "blue", color: "#0000ff"}]);

  const addColor = (obj)=>{
    setColors((colors) => [ obj, ...colors ]);
  }
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/colors" >
          <ColorList colors={colors}/> 
        </Route>
        <Route exact path="/Colors/new" >
          <NewColorForm addColor={addColor}/> 
        </Route>
        <Route path="/Colors/:color" >
          <ColorDetails colors={colors}/> 
        </Route>

        <Redirect to="/colors" />
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
