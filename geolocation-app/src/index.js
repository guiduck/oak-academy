import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {



  
  constructor(props) {
    super(props);

    this.state = { 
      position: {
        latitude: null,
        longitude: null
      },
      loading: false,
      errorMessage: '' 
    }

      window.navigator.geolocation.getCurrentPosition(
          (position)=> {
            this.setState({ 
              position: {
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude, 
              },
              
            })
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
          <div>Loading ...</div> : <div>location: { 
            this.state.position.latitude, 
            this.state.position.longitude 
          }</div> 
        }
      </div>
    );
  }      
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

export default App;