import React from 'react'
import { Link } from 'react-router-dom'

const AdminChecksList = (props) => {
  const check = props.check

  return (
    <li key={check.id}>
      <Link to={`/admin/checks/${check.id}`} onClick={props.editCheck} data-table={check.table_number}> {check.table_number} </Link>
    </li>
  )
}

export default AdminChecksList
