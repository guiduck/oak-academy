import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function MenuBar({menuItems}) {
  console.log({menuItems})
  
  return (
    
      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        {
          menuItems.map((item, i) => {
          {/*return <div key={i} style={{width: '100%'}}><Link to={item.path}>{item.name}</Link></div> */}
            return <div key={i} style={{width: '100%'}}><a href={item.path}>{item.name}</a></div>
          })
        }
      </div>
 
      
   
  )
}
