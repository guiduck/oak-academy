import React from 'react'
import Home from '../Home';
import Contact from '../Contact/Contact';
import CreateUser from '../CreateUser/CreateUser';
import UserDetails from '../UserDetails';
import NotFound from '../NotFound'

import { BrowserRouter as Router, Switch, Route, useParams }from 'react-router-dom'


export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => <Home />
   },
   {
    path: '/createUser',
    name: 'Create User',
    component: () => <CreateUser />
   },
   {
    path: '/contact',
    name: 'Contact',
    component: () => <Contact />
   },
   {
     path: `/userDetails/:id`,
     name: 'User Details',
     component: () => <UserDetails />
   },
   {
     path: `*`,
     name: `page not found`,
    component: () => <NotFound />
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
