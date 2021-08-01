import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { _, loading, error }) => {
            const onSubmit = async ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              const { data } = await register({ variables })
              const { signup } = data
              activateAuth(signup)
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
              const { data } = await login({ variables })
              const { login: loginToken } = data
              activateAuth(loginToken)
            }
            const errorMsg = error && 'Email & password incorrect or user doesn\'t exist'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Sign In' />
          }
        }
      </LoginMutation>
    </>
  )
}

export default NotRegisteredUser
