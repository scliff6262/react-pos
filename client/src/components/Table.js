import React from 'react'

const table = {
  color: 'black',
  float: 'left',
  width: '80px',
  height: '110px',
  margin: '15px',
  border: '1px solid rgba(0, 0, 0, .2)',
  background: '#C0C0C0'
}

const Table = (props) => {
  return (
    <div>
      <a href={`/tables/${props.tableNumber}`}><div style={table}>{props.tableNumber}</div></a>
    </div>
  )
}

export default Table
