import React from 'react'

const Check = (props) => {
  console.log(props)
  return (
    <div>
      <h5>Table {props.tableNumber}</h5>
      <ul className="checkItems">
        <li>Cabernet</li>
        <li>Pizza</li>
      </ul>
    </div>
  )
}

export default Check
