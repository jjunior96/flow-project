import React from 'react'

import {
  AiOutlineBulb,
  AiOutlineArrowUp,
  AiOutlineTeam,
  AiOutlineSearch,
  AiFillHome,
} from 'react-icons/ai'
import { Menu, MenuGroup, MenuItemLink } from './styles'

const MenuBar = () => {
  return (
    <Menu>
      <MenuGroup>
        <MenuItemLink
          title="Voltar para a Home"
          to="/"
          activeStyle={{ color: '#1fa1f2' }}
        >
          <AiFillHome />
        </MenuItemLink>
        <MenuItemLink
          title="Pesquisar"
          to="/search"
          activeStyle={{ color: '#1fa1f2' }}
        >
          <AiOutlineSearch />
        </MenuItemLink>
        <MenuItemLink
          title="Cursos"
          to="/team"
          activeStyle={{ color: '#1fa1f2' }}
        >
          <AiOutlineTeam />
        </MenuItemLink>
      </MenuGroup>
      <MenuGroup>
        <MenuItemLink to="">
          <AiOutlineBulb />
        </MenuItemLink>
        <MenuItemLink to="">
          <AiOutlineArrowUp />
        </MenuItemLink>
      </MenuGroup>
    </Menu>
  )
}

export default MenuBar
