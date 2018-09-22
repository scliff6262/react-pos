import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
      <NavLink to={`/tables/${props.tableNumber}/beer`}>Beer </NavLink>
      <NavLink to={`/tables/${props.tableNumber}/wine`}>Wine </NavLink>
      <NavLink to={`/tables/${props.tableNumber}/liq`}>Liquor </NavLink>
      <NavLink to={`/tables/${props.tableNumber}/food`}>Food </NavLink>
    </div>
  )
}

export default NavBar
