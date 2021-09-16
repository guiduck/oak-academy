import React from 'react'

export default function UserList({ users }) {

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
          <p>{user.name}</p>
          <img src={user.avatar}></img>
          <p>{user.role}</p>
          <p>{user.tweet}</p>
          <a href={user.twitter}></a>
        </div> 
        )         
      })}
    </div>
  )
}
