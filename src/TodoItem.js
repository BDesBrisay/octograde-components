import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
  render() {
    const item = this.props.items;
    return (
      <div className="item">
        <h3 key={item.key}>{item.name}<span className="close">{'\u00d7'}</span></h3>
      </div>
    );
  }
}
