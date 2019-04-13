import React, { Component } from "react"

export default class Item extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    let { item } = this.props

    return (
      <div>
        <p>{item.category}</p>
        <p>{item.items}</p>

        <button>Edit</button>
        <hr />
      </div>
    )
  }
}