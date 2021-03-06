import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

export default function UserDetails() {

  const history = useHistory()

  const [user, setUser] = useState(null)

  const { id } = useParams() 
  const { data: users, error, isLoading } = useFetch('https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json')

  useEffect(() => {
    if (users) {
      users.map(user => {
        if (user.name === id ) {
         setUser(user) 
          } 
        }
      )
    }    
  }, [users])

  const handleDelete = () => {
    fetch("https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json" + user.name,
      {
        method: 'DELETE'        
      }
    ).then(() => {
      history.push('/home')
    })
  }

  return (
    <div className="user-details-wrapper">
      <div className="user-details">
      <h1>{`User Details id:${id}`}</h1>
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { user && 
        <article>
          <div >
            <div>
              <h1>{user.name}</h1>
            </div>
            <div>
              <img src={user.avatar}></img>
            </div>            
          </div>
          <div>
            <p>{user.role}</p>
          </div>
          <div>
            <p>{user.tweet}</p>
          </div>
          <div>
            {user.twitter}
          </div>
          <button onClick={handleDelete}>delete user</button>
        </article>
      }
    </div>
    </div>
    
  )
}
