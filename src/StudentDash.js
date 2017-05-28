import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';

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
  <div className='container-dash'>
    <GridList style={{padding: 10, paddingTop: 40}} cols={4}>
      <Subheader>Classes</Subheader>
      {classes.map(classObj => (
        <GridTile
          titlePosition={'top'}
          key={classObj.id}
          title={classObj.title}
          subtitle={<span><b>{classObj.teacher}</b></span>}
          actionIcon={<IconButton><MoreVert color="white" /></IconButton>}
          style={{backgroundColor: 'blue', margin: 10}}
        / >
      ))}
    </GridList>
  </div>
);

export default StudentDash
