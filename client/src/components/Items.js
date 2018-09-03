import React from "react"

const Items = (props) => {
  return(
    <div>
      <h5>Select an Item</h5>
      <div>
        <p onClick={props.handleClick}>Cabernet</p>
        <p onClick={props.handleClick}>Chianti</p>
        <p onClick={props.handleClick}>Pinot Grigio</p>
        <p onClick={props.handleClick}>Sauvignon Blanc</p>
      </div>
    </div>
  )
}

export default Items
