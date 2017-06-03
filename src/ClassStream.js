import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import './Class.css';

const avatarLink = "http://pm1.narvii.com/6028/1e3c8d53a71135affe2a1ecdec7526cdfde912e9_128.jpg";

const ClassStream = () => {  
  return (
    <div className="classStream">
    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar={avatarLink}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Expand" onTouchTap={this.handleExpand} />
        <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
      </CardActions>
    </Card>
    </div>
  );
};

export default ClassStream
