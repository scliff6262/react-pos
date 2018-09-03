import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
      <NavLink to={`/tables/${props.tableNumber}/beverages`}>Beverages </NavLink>
      <NavLink to={`/tables/${props.tableNumber}/food`}>Food</NavLink>
    </div>
  )
}

export default NavBar
