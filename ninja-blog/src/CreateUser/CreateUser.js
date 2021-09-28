import React, { useState } from 'react'

export default function CreateUser() {
  const [name, setName] = useState('')
  const [tweet, setTweet] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='component'>
      <div className='create'>
      <form >
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
        <select>
          <option value='role1'>role1</option>
          <option value='role2' >role2</option>
          <option value='role3' >role3</option>
        </select>
        <button>add user</button>
      </form>
      
    </div>
    </div>
    
  )
}
