import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
// import HomePage from '@/pages/home'
import LoginPage from '@/pages/login'
import ScreenPage from '@/pages/screen'
import OperatePage from '@/pages/operate'
import DatabasePage from '@/pages/database'
// import AuthPage from '@/pages/auth'
// import PrivateRoute from "./components/PrivateRoute";

const RouterPage = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/screen'} component={ScreenPage} />
        <Route path={'/operate'} component={OperatePage} />
        <Route path={'/database'} component={DatabasePage} />
        {/* <Route
          path='/'
          render={() => (
            <HomePage>
              <Switch>
                <PrivateRoute path='/auth' component={AuthPage} />
                <Redirect to='/home' />
              </Switch>
            </HomePage>
          )}
        /> */}
      </Switch>
    </HashRouter>
  )
}
export default RouterPage
