import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ backgroundColor: "#444444" }} className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label
              style={{
                textAlign: "center",
                fontSize: "1.25em",
                color: "#EDEDED",
              }}
            >
              Search Images
            </label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search Anything . . . "
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
