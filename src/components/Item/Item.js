import React, { Component } from "react"

import UpdateItemForm from "../UpdateItemForm/UpdateItemForm"

export default class Item extends Component {
  constructor() {
    super()

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { item } = this.props

    return (
      this.state.edit ?

        <UpdateItemForm
          item={item}
          toggleEdit={this.toggleEdit}
          updateItem={this.props.updateItem} /> :

        <div>
          <p>{item.category}</p>
          <p>{item.items}</p>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={() => this.props.deleteItem(item.id)} >Delete</button>
          <hr />
        </div>
    )
  }
}