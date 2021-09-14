import React from 'react'


const HemisphereDisplay = ({ latitude }) => {

  latitude ? console.log(latitude) : console.log("latitude not found")
  console.log(latitude)
  return (
    <div>{ latitude }</div>
  );

}

export default HemisphereDisplay;