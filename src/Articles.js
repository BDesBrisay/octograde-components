import React from 'react';
import './Articles.css';
import Article from './Article';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.articles);
  }

  render() {
    return (
      <div>
        {this.props.articles.map((article, index) => {
          return <Article article={article} key={index} />;
        })}
      </div>
    );
  }
}
