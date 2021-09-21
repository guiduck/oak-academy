import React from 'react';

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '50px',
    width: '100%'
  },
  img: {
    objectFit: 'contain',
    width: '100%'
  },
  avatar: {
    width: '100%'

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#ffff",
    boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.2)",
    width:'20%',
  },
  cardWrapper: {
    width: '100%',
  },
  button: {
    width: '100%',
  }
}

export default function UserList({ users, handleDelete }) {

  return (
      <div style={styles.div}>
        {users.map((user, i) => {
            return (
              
                <div key={i} style={styles.card} >
                  <div style={styles.cardWrapper}>
                    <h2>{user.name}</h2>
                    <div style={styles.img}>
                      <img src={user.avatar} style={styles.avatar} ></img>
                    </div>
                    <div style={styles.content} >
                      <p>{user.role}</p>
                      <p>{user.tweet}</p>
                      <a href={user.twitter}></a>                                          
                    </div>
                  </div>
                  {console.log(user)}
                  <button style={styles.button} onClick={() => handleDelete(user.name)}>delete user</button>
                  {console.log(user)} 
                </div>
            
            )         
          })}
      </div>    
  
  )
}
