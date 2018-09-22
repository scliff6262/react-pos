import React from 'react'

const NewItem = (props) => {
  return(
    <div>
      <h3>Add New Item</h3>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={props.handleChange} value={props.item.name}></input>
        <select name="category" onChange={props.handleChange}>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="liquor">Liquor</option>
          <option value="food">Food</option>
        </select>
        <input type="text" name="price" placeholder="Price" onChange={props.handleChange} value={props.item.price}></input>
        <button type="submit" onClick={props.createItem}>Create Item</button>
      </form>
    </div>
  )
}

export default NewItem
