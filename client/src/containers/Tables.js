import React, { Component } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { fetchShift } from '../actions/shiftActions'

class Tables extends Component {
  constructor(){
    super()

    this.state = {
      activeTables: []
    }

    this.findActiveTables()
  }

  componentWillMount(){
    this.props.fetchShift()
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

  adminLink = () => {
    this.props.history.push('/admin')
  }

  render() {
    return (
      <div>
        <h5>Shift: {this.props.thisShift.date}</h5>
        {this.displayTables(5)}
        <button onClick={this.adminLink}>Admin</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  thisShift: state.shifts.thisShift
})

export default connect(mapStateToProps, { fetchShift })(Tables)
