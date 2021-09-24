import React from 'react'
import Home from '../Home';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import UserDetails from '../UserDetails';

import { BrowserRouter as Router, Switch, Route, useParams }from 'react-router-dom'


export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => <Home />
   },
   {
    path: '/products',
    name: 'Products',
    component: () => <Products />
   },
   {
    path: '/contact',
    name: 'Contact',
    component: () => <Contact />
   },
   {
     path: `/userDetails/:id`,
     name: 'UserDetails',
     component: () => <UserDetails />
   }
]  

export default function Routes() {


  return (
      <Router>
          <Switch>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path}>
                {route.component}
              </Route>
            );
          })}
          </Switch>        
      </Router> 
  )
}
