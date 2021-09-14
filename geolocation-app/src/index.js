import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  state = { 
    latitude: null,
    longitude: null,
    loading: false,
    errorMessage: '' 
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        this.setState( 
          {
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude, 
          },
        )
        console.log(position);
    },
    (error) => {
      this.setState({ errorMessage: error.message })
    }
  ); 
  }

  render() {
    return (
      // <GetUserCoordinates />
     
      <div>
        {this.state.loading ? 
          <div>Loading ...</div> : 
          <div>location: { 
              //this.state.latitude, " " ,
              this.state.longitude 
            }
          </div> 
        }
        <HemisphereDisplay latitude={this.state.latitude} />
      </div>
    );
  }      
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

export default App;