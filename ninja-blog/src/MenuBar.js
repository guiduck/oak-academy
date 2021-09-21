import React from 'react'

export default function MenuBar({menuItems}) {
  
  return (
    
      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        {
          menuItems.map((item) => (
            <div style={{width: '100%'}}><a href={item.path}>{item.name}</a></div>
          ))
        }
      </div>
   
  )
}
