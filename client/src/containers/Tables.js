import React, { Component } from 'react'
import Table from '../components/Table'

class Tables extends Component {
  render() {
    return (
      <div>
        <Table tableNumber="1"/>
        <Table tableNumber="2"/>
      </div>
    )
  }
}

export default Tables
