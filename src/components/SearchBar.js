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
              style={
                {  
                  textAlign: "center",
                  fontSize: '1.6rem',
                  lineHeight: '2.8rem',
                  color: "#EDEDED",
                  paddingBottom:'5px'

              }}
            >
              Search Images
            </label>
            <input
              type="text"
              value={this.state.term}
              
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{
                fontSize: '1.25rem',
                padding: '0.2rem .5rem',
                lineHeight: '2.5rem',
                borderRadius: '20px',
                backgroundColor: 'white',
                marginBottom: '.25rem'
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
