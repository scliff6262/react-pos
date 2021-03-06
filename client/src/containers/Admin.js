import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NewItem from '../components/NewItem'
import AdminChecksList from '../components/AdminChecksList'
import AdminCheck from './AdminCheck'

class Admin extends Component {
  constructor(){
    super()

    this.state = {
      token: null,
      username: "",
      password: "",
      item: {
        name: "",
        category: "",
        price: 0
      },
      checks: [],
      adminCheck: null
    }

  }

  componentDidMount(){
    this.getChecks()
  }


  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password

    fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ username , password })
    }).then( r => r.json() )
    .then( json => {
        this.setState({
          token: json["jwt"],
          username: json["name"]
        })
    })
  setTimeout(() => { console.log(this.state) }, 1000)
  }

  handleItemChange = (e) => {
    e.preventDefault()
    const item = {...this.state.item}
    switch(e.target.name){
      case "name":
        item.name = e.target.value
        this.setState({ item })
        break;
      case "category":
        item.category = e.target.value
        this.setState({ item })
        break;
      case "price":
        item.price = parseInt(e.target.value, 10)
        this.setState({ item })
        break;
      default:
        return null
    }
  }

  createItem = (e) => {
    e.preventDefault()
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state.item)
    }).then( () => {
        const item = { name: "", category: "", price: 0 }
        this.setState({ item })
      })
  }

  getChecks = () => {
    fetch("/checks")
    .then( r => r.json() )
    .then( json => this.setState({ checks: json }))
  }

  editCheck = (e) => {
    const checkId = e.target.getAttribute('data-table')
    fetch(`/checks/${checkId}`)
    .then( r => r.json() )
    .then( json => this.setState({ adminCheck: json }) )
  }

  render(){
    const tablesScreen = <button onClick={ (e) => this.props.history.push('/tables')}>Tables</button>
    if(this.state.token){
      return(
        <div>
          {tablesScreen}
          <h5>Welcome</h5>
          <NewItem item={this.state.item} handleChange={this.handleItemChange} createItem={this.createItem} />
          <p>Active Checks: </p>
          <ul>
            {this.state.checks.map( (check) => check.active ? <AdminChecksList key={check.id} editCheck={this.editCheck} check={check}/> : null )}
          </ul>
          <Route exact path={'/admin/checks/:check'} render={ () => this.state.adminCheck ? <AdminCheck check={this.state.adminCheck} /> : null }/>
        </div>
      )
    } else {
      return(
        <div>
          {tablesScreen}
          <h5>Administrator Login</h5>
          <form>
            <input type="text" placeholder="Username" onChange={this.changeUsername}></input>
            <br />
            <input type="text" placeholder="Password" onChange={this.changePassword}></input>
            <br />
            <button onClick={this.handleClick}>Login</button>
          </form>
        </div>
      )
    }
  }
}

export default Admin
