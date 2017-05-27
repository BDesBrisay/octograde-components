import React from 'react';
import './Todo.css';
import TodoItem from './TodoItem'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      items: this.props.items,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Todo</h1>
        <form onSubmit={this.addItem}>
          <input value={this.state.value} onChange={this.inputChange} />
          <button type="submit" value="Submit">Submit</button>
        </form>
        <br /><hr />
        {this.props.items.map((item, index) => {
          return <TodoItem items={item} key={index} />;
        })}
      </div>
    );
  }

  addItem = (event) => {
    event.persist();
    const theValue = this.state.value;
    this.props.items.push(
      {
        name: theValue,
      }
    );
    this.setState({value: ''});
    return this.props.items;
  }

  inputChange = (event) => {
    this.setState({value: event.target.value});
  }
}
