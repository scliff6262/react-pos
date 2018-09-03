import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
      <NavLink to="/tables/:table/beverages">Beverages</NavLink>
      <NavLink to="/tables/:table/food">Food</NavLink>
    </div>
  )
}

export default NavBar
