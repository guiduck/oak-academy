import React from 'react'

export default function UserList({ users, handleDelete }) {

  return (
    <div>
      {users.map((user, i) => {
        return (
        <div key={i}>
          <div>
            <h2>{user.name}</h2>
            <img src={user.avatar}></img>
            <p>{user.role}</p>
            <p>{user.tweet}</p>
            <a href={user.twitter}></a>
          </div> 
          {console.log(user)}
          <button onClick={() => handleDelete(user.name)}>delete user</button>
          {console.log(user)}
        </div>
        )         
      })}
    </div>
  )
}
