import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { _, loading, error }) => {
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
            <LoginMutation>
              {
                (login, { _, loading, error }) => {
                  const onSubmit = async ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    await login({ variables })
                    activateAuth()
                  }
                  const errorMsg = error && 'Email & password incorrect or user doesn\'t exist'
                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Sign In' />
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
