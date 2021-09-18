import React from 'react';
import Card from './Card/Card';

const styles = {
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    maxHeight: 'auto',
    width: '100%'
  },
  img: {
    objectFit: 'contain',
    width: '100%'
  },
  avatar: {
    width: '30%'

  }
}

export default function UserList({ users, handleDelete }) {

  return (
      <div style={styles.div}>
        {users.map((user, i) => {
            return (
              <Card>
                <div key={i} >
                <div>
                  <h2>{user.name}</h2>
                  <div style={styles.img}>
                    <img src={user.avatar} style={styles.avatar} ></img>
                  </div>
                  <p>{user.role}</p>
                  <p>{user.tweet}</p>
                  <a href={user.twitter}></a>
                </div> 
                {console.log(user)}
                <button onClick={() => handleDelete(user.name)}>delete user</button>
                {console.log(user)}
                </div>
              </Card>
            )         
          })}
      </div>    
  
  )
}
