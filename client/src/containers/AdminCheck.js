import React, { Component } from 'react';

const AdminCheck = (props) => {
  const check = props.check
  return(
    <div>
      <h5>Table {check.table_number}</h5>
      <p>Check ID: {check.id}</p>
      <p>Items:</p>
      <ul>
        {check.items.map( item => <li>{item.name}</li> )}
      </ul>
    </div>
  )
}

export default AdminCheck
