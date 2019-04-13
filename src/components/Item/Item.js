import React, { Component } from "react"

import UpdateItemForm from "../UpdateItemForm/UpdateItemForm"

import "./Item.css"

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

        <div className="item-card">
          <div className="list-items">
            <p className="list-item-category">{item.category}</p>
            <p className="list-item-gear">{item.items}</p>
          </div>

          <div className="item-buttons">
            <button className="edit" onClick={this.toggleEdit}>Edit...</button>
            <button className="delete" onClick={() => this.props.deleteItem(item.id)} >X</button>
          </div>
          <hr />
        </div>
    )
  }
}