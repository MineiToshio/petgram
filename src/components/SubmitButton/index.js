import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ disabled, children, onClick }) => (
  <Button onClick={onClick} disabled={disabled}>{children}</Button>
)
