import React from 'react'

const styles = {
  div: {
    display: 'flex',
    backgroundColor: "#ffff",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    maxWidth: "100%",
    maxHeight: "100%"
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