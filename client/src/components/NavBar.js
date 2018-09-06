import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
      <NavLink to={`/tables/${props.tableNumber}/beer`}>Beer </NavLink>
      <NavLink to={`/tables/${props.tableNumber}/wine`}>Wine</NavLink>
    </div>
  )
}

export default NavBar
