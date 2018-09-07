import React, { Component } from 'react'
import Table from '../components/Table'

class Tables extends Component {
  constructor(){
    super()

    this.state = {
      activeTables: []
    }

    this.findActiveTables()
  }

  findActiveTables = () => {
    fetch("/checks")
    .then( r => r.json() )
    .then( json => json.filter( check => check.active ))
    .then( activeChecks => this.setState({ activeTables: activeChecks }))
  }

  displayTables = (numberOfTables) => {
    const tableComponents = []
    const activeTableNumbers = this.state.activeTables.map( table => table["table_number"] )
    for(let i = 1; i <= numberOfTables; i++){
      if(activeTableNumbers.some( n => n === i )){
        tableComponents.push(<Table active="true" tableNumber={i} />)
      } else {
        tableComponents.push(<Table active="false" tableNumber={i} />)
      }
    }
    return tableComponents
  }



  render() {
    return (
      <div>
        {this.displayTables(5)}
      </div>
    )
  }
}

export default Tables
