import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home";
// import Toolbar from "./Components/Toolbar/Toolbar";
import Menu from "./Components/Menu";
import "./RecipeApp.css";
// import Navigation from "./Components/Navigation";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;