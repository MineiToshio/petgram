import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <div style={{ padding: '0 10px' }}>
        <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
        </Router>
        <Context.Consumer>
          {
            ({ isAuth }) =>
              isAuth ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              ) : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
              )
          }
        </Context.Consumer>
      </div>
      <Navbar />
    </div>
  )
}
