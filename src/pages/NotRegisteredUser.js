import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Sign Up' />
            <UserForm onSubmit={activateAuth} title='Sign In' />
          </>
        )
      }
    }
  </Context.Consumer>
)
