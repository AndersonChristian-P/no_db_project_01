import React, { Component } from "react"

import "./UpdateItemForm.css"

export default class UpdateItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.item.id,
      category: props.item.category,
      items: props.item.items,
      preset: props.item.preset
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let item = { ...this.props.item, ...this.state }
    this.props.updateItem(item)
    this.props.toggleEdit()
  }

  render() {
    return (
      <div className="update">
        <div className="update-inputs">
          <input
            className="edit-item"
            onChange={this.handleChange}
            type="text"
            placeholder={this.state.category}
            name="category"
          />
          <input
            className="edit-item"
            onChange={this.handleChange}
            type="text"
            placeholder={this.state.items}
            name="items"
          />
        </div>

        <div className="update-buttons" >
          <button className="edit-item-button" onClick={this.handleClick}>Submit</button>
          <button className="edit-cancel-button" onClick={this.props.toggleEdit}>Cancel</button>
        </div>

        <hr className="update-hr" />

      </div>
    )
  }

}