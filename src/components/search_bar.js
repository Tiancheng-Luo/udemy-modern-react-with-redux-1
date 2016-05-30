import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }


  handleInputChange(e) {
    let term = e.target.value
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.handleInputChange(e)} />
      </div>
    )
  }
}

export default SearchBar // could do up top
