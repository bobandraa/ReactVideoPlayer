import React, { Component } from 'react'; //import 'React' and pull off the propery 'Component' as a veriable called 'Component'.

// This is a functional component.
// const SearchBar = () => {
//   return <input />
// };

// This is a class-based component
// class SearchBar extends Component {
//   render () {
//     return <input onChange={this.onInputChange} />; //evt handler passed on element to be monitored. 'onChange' is a react defined property.
//   }
//   onInputChange (evt) {
//     console.log(evt.target.value);
//   }
// };



// Refactored with arrow functions. Same as above.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render () {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={evt => this.setState({ term: evt.target.value }) }/>
      </div>
    )
  }

};


export default SearchBar; //any file that imports 'SeachBar' has access to this component.