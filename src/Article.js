import React from 'react';
import './Article.css';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="">{this.props.article.title}</p>
        <p>{this.props.article.author}</p>
        <p>{this.props.article.timestamp}</p>
        <p>{this.props.article.body}</p>
        <p><img src={this.props.article.imageUrl} style={{height: 200}}/></p>
        <hr />
      </div>
    );
  }
}
