import React, {useState} from 'react';

const GetUserCoordinates = () =>{

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  async function getUserPosition() {
    if (navigator.geolocation) {
      const position = await navigator.geolocation.getCurrentPosition((position)=> console.log(position));
     // setUserCoordinates(position);
      return position;
    } else {
      console.log('couldnt position')
    }
  }

  // async function setUserCoordinates({lat, lon}) {
  //   const {lat, lon} = {lat, lon}
  //   setLatitude(lat);
  //   setLongitude(lon);
  //   console.log(latitude, longitude)
  // }

  return (
    <div>
      <button onClick={getUserPosition()} > get position </button>
      <div>your current position is: {latitude}, {longitude} </div>
    </div>
  );
}

export default GetUserCoordinates;