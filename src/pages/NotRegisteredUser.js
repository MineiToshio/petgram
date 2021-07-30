import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = async ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    await register({ variables })
                    activateAuth()
                  }
                  const errorMsg = error && 'User already exists or there is a problem'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Sign Up' />
                }
              }
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title='Sign In' />
          </>
        )
      }
    }
  </Context.Consumer>
)
