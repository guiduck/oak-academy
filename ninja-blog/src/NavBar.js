import React from 'react'
import MenuBar from './MenuBar'
import { routes } from './routes/Routes'

export default function NavBar() {

  return (
    <>
      <div className="navBar" style={{
        display: 'flex', 
        alignItems: 'center', 
        height: '15vh', 
        justifyContent: 'space-around',        
      }}>
        <h1>The dojo startup</h1>
        <div style={{ width: '50%', marginLeft: '-15rem'}}>
        <MenuBar menuItems={routes} />
        </div>
          
      </div>
      
    </>
  )
}
