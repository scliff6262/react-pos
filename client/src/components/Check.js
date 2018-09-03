import React from 'react'

const Check = (props) => {
  const items = props.initialItems.map( (item) => <li>{item}</li> )
  const itemsToAdd = props.itemsToAdd.map ( (item) => <li>{item}</li> )
  return (
    <div>
      <h5>Table {props.tableNumber}</h5>
      <ul className="checkItems">
        {items}
        {itemsToAdd}
      </ul>
    </div>
  )
}

export default Check
