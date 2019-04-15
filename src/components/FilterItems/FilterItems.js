import React, { Component } from "react"

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
      <div>

        <div className="filter">
          <input className="filter-item-input" onChange={this.handleChange} placeholder="Filter Through Gear" value={this.state.items} />
          <button onClick={this.applyFilter}>Filter</button>
          <button onClick={this.removeFilter}>Remove Filter</button>
        </div>

      </div>
    )
  }


}