import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';


const classes = [
  {
    id: 1,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 2,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 3,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 4,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 5,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 6,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 7,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  },
  {
    id: 8,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  }
];

const StudentDash = () => (
  <div>
    <div className='containerDash'>
      <GridList style={{paddingTop: 70}} padding={25} cellHeight='auto' cols={4}>
        <Subheader style={{marginBottom: 20}}>
          <h1>Classes</h1>
          <Divider />
        </Subheader>
        {classes.map(classObj => (
          <Card style={{borderRadius: 4}} key={classObj.id}>
            <CardTitle title={classObj.title} subtitle={classObj.teacher} />
            <Divider />
            <CardText>{classObj.description}</CardText>
          </Card>
        ))}
      </GridList>
    </div>
    <FloatingActionButton style={{position: 'absolute', bottom: 50, right: 50}}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default StudentDash
