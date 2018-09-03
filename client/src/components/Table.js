import React from 'react'
import { NavLink } from 'react-router-dom'

const table = {
  color: 'black',
  float: 'left',
  width: '80px',
  height: '110px',
  margin: '15px',
  border: '1px solid rgba(0, 0, 0, .2)',
  background: '#C0C0C0'
}

const Table = (props) => {
  return (
    <div>
    <NavLink to={`/tables/${props.tableNumber}`}><div style={table}>{props.tableNumber}</div></NavLink>
    </div>
  )
}

export default Table
