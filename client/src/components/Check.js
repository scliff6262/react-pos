import React from 'react'

const Check = (props) => {
  const items = props.initialItems.map( (item) => <li data-price={item.price}>{item.name}</li> )
  const itemsToAdd = props.itemsToAdd.map( (item) => <li data-price={item.price} onClick={props.removeLastNewItem}>{item.name}</li> )
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
