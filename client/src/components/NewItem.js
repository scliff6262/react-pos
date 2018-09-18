import React from 'react'

const NewItem = (props) => {
  return(
    <div>
      <h3>Add New Item</h3>
      <form>
        <input type="text" name="name"placeholder="Name"onChange={props.handleChange}></input>
        <input type="text" name="category"placeholder="Category"onChange={props.handleChange}></input>
        <input type="text" name="price"placeholder="Price"onChange={props.handleChange}></input>
        <button type="submit" onClick={props.createItem}>Create Item</button>
      </form>
    </div>
  )
}

export default NewItem
