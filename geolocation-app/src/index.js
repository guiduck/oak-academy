import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
          (position)=> {
            this.setState({ latitude: position.coords.latitude })
            console.log(position)
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
        user location is: {this.state.latitude}
      </div>
    );
  }      
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

export default App;