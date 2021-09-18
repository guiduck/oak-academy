import React from 'react'

const styles = {
  div: {
    display: 'flex',
    backgroundColor: "#ffff",
    boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.2)",
    width: "20%",
    height: "100%"
  }
}

const Card = ({ children }) => {
  return (
    <div style={styles.div} >
      {children}
    </div>
  )
}

export default Card;