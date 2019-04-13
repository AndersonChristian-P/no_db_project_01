import React, { Component } from "react"

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
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="category"
          name="category"
        />

        <input
          onChange={this.handleChange}
          type="text"
          placeholder="items"
          name="items"
        />

        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}