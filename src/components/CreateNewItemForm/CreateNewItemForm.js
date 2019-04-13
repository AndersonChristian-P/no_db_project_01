import React, { Component } from "react"

import "./CreateNewItemForm.css"

export default class CreateNewItemForm extends Component {
  constructor() {
    super()

    this.state = {
      category: "",
      items: ""
    }
  }

  handleChange = (event) => {
    let { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newItem = this.state
    this.props.createNewItem(newItem)
  }

  render() {
    return (
      <div className="create-item">
        <span className="create-item-inputs">
          <input
            className="create-item-input-category"
            onChange={this.handleChange}
            type="text"
            placeholder="category"
            name="category"
          />
          <input
            className="create-item-input-items"
            onChange={this.handleChange}
            type="text"
            placeholder="gear"
            name="items"
          />
        </span>

        <button className="create-item-button" onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}