import React, { Component } from "react"
import axios from "axios"

import Item from "../Item/Item"
import CreateNewItem from "../CreateNewItemForm/CreateNewItemForm"

export default class Items extends Component {

  constructor() {
    super()

    this.state = {
      items: []
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

  render() {
    return (
      <div>

        <CreateNewItem createNewItem={this.createNewItem} />

        <div>
          {this.state.items.map(item => {
            return <Item
              key={item.id}
              item={item}
              updateItem={this.updateItem}
            />
          })}
        </div>
      </div>
    )
  }



}