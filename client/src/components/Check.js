import React from 'react'

const Check = (props) => {
  const items = props.initialItems.map( (item) => <li data-price={item.price}>{item.name} - ${item.price}</li> )
  const itemsToAdd = props.itemsToAdd.map( (item) => <li data-price={(item.price)} onClick={props.removeLastNewItem}>{item.name} - ${item.price}</li> )
  let subtotal = 0

  props.initialItems.forEach( item => subtotal += parseInt(item.price, 10) )
  props.itemsToAdd.forEach( item => subtotal += parseInt(item.price, 10) )

  const tax = Math.round(100 * (subtotal * .08875))/100
  const total = tax + subtotal

  return (
    <div>
      <h5>Table {props.tableNumber}</h5>
      <ul className="checkItems">
        {items}
        {itemsToAdd}
      </ul>
      <p>Subtotal: ${subtotal} </p>
      <p>Tax: ${tax}</p>
      <p>Total: $ {total}</p>
    </div>
  )
}

export default Check
