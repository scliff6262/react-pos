import React from 'react'

const AdminChecksList = (props) => {
  const check = props.check

  return (
    <li key={check.id}>
      {check.id} { check.active ? <button style={{"background-color": "#39ff14"}}>Edit Check</button> : <button>View</button> }
    </li>
  )
}

export default AdminChecksList
