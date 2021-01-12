import React from "react";

export class SearchInput extends React.Component {
  state = {
    location: "",
  };

  onInputChange = (e) => {
    this.setState({
      location: e.target.value
    })
  } 

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.setQuery(this.state.location)
  }

  render() {
    return (
      <form className="search-input" onSubmit={this.onFormSubmit} >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Sydney"
          value={this.state.location}
          onChange={this.onInputChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
