import React from 'react'

const Category = (props) => {
  const items = props.items.map( item => <p data-price={item.price} data-id={item.id} onClick={props.handleClick}>{item.name}</p>)
  return(
    <div>
      {items}
    </div>
  )
}

export default Category
