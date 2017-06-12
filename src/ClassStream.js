import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Search from 'material-ui/svg-icons/action/search';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import Assignment from 'material-ui/svg-icons/action/assignment';
import AssignmentLate from 'material-ui/svg-icons/action/assignment-late';
import AssignmentReturn from 'material-ui/svg-icons/action/assignment-return';
import AssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in';
import Done from 'material-ui/svg-icons/action/done';
import Today from 'material-ui/svg-icons/action/today';
import Grade from 'material-ui/svg-icons/action/grade';
import PriorityHigh from 'material-ui/svg-icons/notification/priority-high';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

import './Class.css';

const avatarLink = "http://pm1.narvii.com/6028/1e3c8d53a71135affe2a1ecdec7526cdfde912e9_128.jpg";

const classInfo = [
  {
    id: 1,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  }
];

const styles = {
  chip: {
    margin: 4,
    display: 'inline-block',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 10px',
  },
  turnInButton: {
    margin: '0 0 0 8px',
    float: 'right',
  },
}

const chips = [
  { key: 1, text: 'Unit 4' },
  { key: 2, text: 'Economics' },
  { key: 3, text: 'Free Trade' },
  { key: 4, text: 'Globalization' },
]

const assignments = [
  {
    id: 1,
    name: 'Demand Worksheet',
    dueDate: 'June 15',
    grade: 'N/A',
    turnedIn: false,
  },
  {
    id: 2,
    name: 'Graph Quiz',
    dueDate: 'June 3',
    grade: 'N/A',
    turnedIn: true,
  },
  {
    id: 3,
    name: 'Supply Worksheet',
    dueDate: 'June 3',
    grade: '19/20',
    turnedIn: true,
  },
  {
    id: 4,
    type: 'question',
    name: 'Demand Worksheet',
    dueDate: 'null',
    creationDate: 'May 25, 2017 11:23:04',
    data: [
      {
        type: 'url',
        title: 'some resource',
        link: 'some link'
      },
      {
        type: 'file',
        title: 'some resource',
        link: 'some link'
      }
    ]
  }
];

/*
<div style={styles.wrapper}>
  {chips.map((item) => {
    return(
      <Chip key={item.key} style={styles.chip}>
        {item.text}
      </Chip>
    )
  })}
</div>
*/

const ClassStream = () => {
  return (
    <div className='classStream'>

      {assignments.items.map((item, index) => {
        return(
        <Card key={index} className='level1 assignmentCard'>
          <CardText></CardText>
        </Card>
        )
      })}
    </div>
  );
};

export default ClassStream
