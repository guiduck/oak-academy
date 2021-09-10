import React from "react";
import ReactDOM from 'react-dom';

export default class App extends React.Component {

  state = {
    loading: null,
    user: null,
  }

  async componentDidMount( ) {
    const url = "https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      user: data[0],
      loading: false
    })

    console.log(data[0])
  }

  render() {
    return(
      <div>
        {this.state.loading || this.state.user ? 
          (<div>Loading...</div>) : 
          (
            <div>
              <div>user:{this.state.user.name}</div>
              <div>user:{this.state.user.role}</div>
              <div>user:{this.state.user.tweet}</div>
              <img src={this.state.user.avatar} />
            </div>
            )
        }
      </div>
    );
    
  }
}

ReactDOM.render (
  <App />,
  document.querySelector('#root')
)