import React, { Component } from "react"
import axios from "axios"

import Item from "../Item/Item"
import CreateNewItem from "../CreateNewItemForm/CreateNewItemForm"

import "./Items.css"

export default class Items extends Component {

  constructor() {
    super()

    this.state = {
      items: [],
      filter: ""
    }
  }

  componentDidMount() {
    axios.get("/api/kit")
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(`GET error ${err}`)
      })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  createNewItem = (item) => {
    axios.post("/api/kit", item)
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(`POST err ${err}`)
      })
  }

  updateItem = (item) => {
    axios.put(`/api/kit/${item.id}`, item)
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(`PUT err ${err}`)
      })
  }

  deleteItem = (id) => {
    axios.delete(`/api/kit/${id}`)
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(`DELETE err ${err}`)
      })
  }

  render() {
    return (
      <div className="hero">

        <div className="top-view">
          <CreateNewItem createNewItem={this.createNewItem} />

          <div className="filter">
            <input className="filter-item-input" onChange={this.handleFilterChange} placeholder="Filter Through Gear" />
          </div>
        </div>

        <div className="item-cards">
          {this.state.items.filter(val => {
            return val.items.toLowerCase().includes(this.state.filter) ||
              val.items.toUpperCase().includes(this.state.filter)
          })
            .map(item => {
              return <Item
                key={item.id}
                item={item}
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
              />
            })}
        </div>
      </div>
    )
  }
}