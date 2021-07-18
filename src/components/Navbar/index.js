import React from 'react'
import { Nav, Link } from './styles'
import { MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { FiHome } from 'react-icons/fi'

const SIZE = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><FiHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
