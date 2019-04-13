import React, { Component } from "react"
import axios from "axios"

import Item from "../Item/Item"

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

  render() {
    return (
      <div>
        <div>
          {this.state.items.map(item => {
            return <Item
              key={item.id}
              item={item}
            />
          })}
        </div>
      </div>
    )
  }



}