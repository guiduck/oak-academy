import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function CreateUser() {
  const [name, setName] = useState('')
  const [tweet, setTweet] = useState('')
  const [role, setRole] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, role, tweet }

    setIsLoading(true);
    
      fetch("https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json",
        {
          method: 'POST',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify(user)
        }
      ).then((res) => {
      console.log('new user added', res)
      setIsLoading(false)
      history.push('/home')
    }).catch((err) => console.log(err))
  }

  return (
    <div className='component'>
      <div className='create'>
        <form onSubmit={handleSubmit}>
          <h2>
            Add new user:
          </h2>
          <label>user name:</label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </input>
          <label>tweet:</label>
          <textarea
            required
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          >            
          </textarea>
          <label>user role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value='designer'>designer</option>
            <option value='developer' >developer</option>
            <option value='founder' >founder</option>
          </select>
          {!isLoading && <button>Add user</button>}
          {isLoading && <button disable>Adding...</button>}
        </form>
      </div>
    </div>
  )
}
