import React, { Component } from 'react';

const AdminCheck = (props) => {

  const deleteItem = (e) => {
    const itemId = parseInt(e.target.getAttribute("data-item-id"))
    const checkId = parseInt(e.target.parentElement.parentElement.getAttribute("data-check-id"))

    fetch("/check_items/" + itemId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ checkId })
    })
  }

  const check = props.check

  return(
    <div>
      <h5>Table {check.table_number}</h5>
      <p>Check ID: {check.id}</p>
      <p>Items:</p>
      <ul data-check-id={check.id}>
        {check.items.map( item => <div><li>{item.name}</li><button data-item-id={item.id} onClick={deleteItem}>Delete</button></div> )}
      </ul>
    </div>
  )
}

export default AdminCheck
