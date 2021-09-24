import React from "react";
import Routes from './routes/Routes'
import NavBar from './NavBar'

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
