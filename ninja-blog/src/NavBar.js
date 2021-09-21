import React from 'react'
import MenuBar from './MenuBar'

export default function NavBar() {
  const routes = [
    {
      path: '/home',
      name: 'Home'
     },
     {
      path: '/products',
      name: 'Products'
     },
     {
      path: '/contact',
      name: 'Contact'
     }
  ]  
  

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
