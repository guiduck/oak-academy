import React from 'react'
import Home from '../Home';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

import { BrowserRouter as Router, Switch, Route}from 'react-router-dom'

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
   }
]  

export default function Routes() {
  return (
      <Router>
          <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path}>
              {route.component}
            </Route>
          ))}
          </Switch>        
      </Router> 
  )
}
