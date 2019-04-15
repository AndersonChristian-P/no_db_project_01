import React, { Component } from "react"

import "./FilterItems.css"

export default class FilterItems extends Component {

  constructor() {
    super()

    this.state = {
      items: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      items: event.target.value
    })
  }

  applyFilter = () => {
    let filter = this.state.items
    console.log(this.state.items)
    this.props.filterItems(filter)
  }

  removeFilter = () => {
    this.props.filterItems("")
    this.setState({
      items: ""
    })
  }

  render() {
    return (
      <div className="filter">

        <span className="filter-input">
          <input className="filter-item-input" onChange={this.handleChange} placeholder="Filter Through Category or Gear" value={this.state.items} />
        </span>

        <spa className="filter-buttons">
          <button className="filter-button" onClick={this.applyFilter}>Filter</button>
          <button className="filter-button remove" onClick={this.removeFilter}>Remove Filter</button>
        </spa>

      </div>
    )
  }


}