import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from '@/pages/home'
import LoginPage from '@/pages/login'
import AuthPage from '@/pages/auth'
import PrivateRoute from "./components/PrivateRoute";

const RouterPage = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <Route
          path='/'
          render={() => (
            <HomePage>
              <Switch>
                <PrivateRoute path='/auth' component={AuthPage} />
                <Redirect to='/home' />
              </Switch>
            </HomePage>
          )}
        />
      </Switch>
    </HashRouter>
  )
}
export default RouterPage
