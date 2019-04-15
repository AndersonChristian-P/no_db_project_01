import React, { Component } from "react"
import axios from "axios"

import FilterItems from "../FilterItems/FilterItems"
import Item from "../Item/Item"
import CreateNewItem from "../CreateNewItemForm/CreateNewItemForm"

import "./Items.css"

export default class Items extends Component {

  constructor() {
    super()

    this.state = {
      items: [],
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

  filterItems = (items) => {
    axios.get(`/api/kit?items=${items}`)
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(`QUERY GET err ${err} `)
      })
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

          <FilterItems filterItems={this.filterItems} />
        </div>

        <div className="item-cards">
          <span className="toolkit">ToolKit</span>

          {this.state.items.map(item => {
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