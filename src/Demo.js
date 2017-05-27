import React from 'react';
import './Demo.css';

export default class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      inputValue: undefined
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World! {this.state.name}, {this.state.inputValue}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <input onChange={this.changeValue}></input>
      </div>
    );
  }

  helloWorld() {
    // stuff
  }

  changeName = (event) => {
    event.persist();
    console.log(event);
    this.setState({name: 'David'});
  };

  changeValue = (event) => {
    this.setState({inputValue: event.target.value});
  };
}
