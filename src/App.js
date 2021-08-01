import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Redirect, Router } from '@reach/router'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <div style={{ padding: '0 10px' }}>
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect from='/favs' to='/login' />}
          {!isAuth && <Redirect from='/user' to='/login' />}
          {isAuth && <Redirect from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
      </div>
      <Navbar />
    </Suspense>
  )
}
