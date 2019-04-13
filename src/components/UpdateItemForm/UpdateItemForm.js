import React, { Component } from "react"

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
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder={this.state.category}
          name="category"
        />

        <input
          onChange={this.handleChange}
          type="text"
          placeholder={this.state.items}
          name="items"
        />

        <button onClick={this.handleClick}>Submit</button>
        <button onClick={this.props.toggleEdit}>Cancel</button>

      </div>
    )
  }

}