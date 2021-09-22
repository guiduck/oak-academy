import React from "react";
import Routes from './routes/Routes'
import NavBar from './NavBar'
import Home from './Home'

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <Routes />
      </>
    )
  }  
}
