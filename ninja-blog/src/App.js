import React from "react";
import Home from './Home';
import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>

    )
  }  
}
