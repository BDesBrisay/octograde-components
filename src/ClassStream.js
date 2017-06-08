import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import { green500, green400 } from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

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

const assignments = {
  items: [
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
      name: 'Demand Worksheet',
      dueDate: 'May 25',
      grade: '19/20',
      turnedIn: true,
    },
  ]
};

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
      <Toolbar style={{marginBottom: 20}}>
        <ToolbarGroup>
          <TextField
            hintText='Search'
            fullWidth={true}
            style={{minWidth: 100,}}
          />
          <IconButton>
            <Search />
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <FlatButton
                label="Filter"
                icon={<FilterList />}
              />
            }
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
          <IconButton
            tooltip='Refresh Stream'
            tooltipPosition='bottom-left'
          >
            <Refresh />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
      <Subheader style={{marginBottom: 10}}>
          <div className='cardInit'>
            <div className='cardInitItem'>
              Title
            </div>
            <div className='cardInitItem'>
              Due Date
            </div>
            <div className='cardInitItem'>
              Grade
            </div>
            <div className='cardInitItem'>
              State
            </div>
            <div className='expanderIcon'>
            </div>
          </div>
        </Subheader>
      {assignments.items.map((item) => {
        return(
        <Card key={item.id} className='level1 assignmentCard'>
          <CardText actAsExpander={true} className='streamCardCont'>
            <div className='cardInit'>
              <div className='cardInitItem'>
                <Assignment /> {item.name}
              </div>
              <div className='cardInitItem'>
                <Today /> {item.dueDate}
              </div>
              <div className='cardInitItem'>
                <Grade /> {item.grade}
              </div>
              {item.turnedIn ?
                <div className='cardInitItem itemDone'><Done /> Done</div>
                :
                <div className='cardInitItem itemLate'><PriorityHigh /> Late</div>
              }
              <div className='expanderIcon'>
                <ExpandMore />
              </div>
            </div>
          </CardText>
          <CardHeader
            title='URL Avatar'
            subtitle='Subtitle'
            avatar={avatarLink}
            expandable={true}
          />
          <CardTitle
            title='Card title'
            subtitle='Card subtitle'
            expandable={true}
          />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <div style={styles.wrapper} expandable={true}>
            {chips.map((item) => {
              return(
                <Chip key={item.key} style={styles.chip}>
                  {item.text}
                </Chip>
              )
            })}
          </div>
          <CardActions expandable={true}>
            <FlatButton label="Add/Create Content" />
            <FlatButton style={styles.turnInButton} label="Turn In" />
          </CardActions>
        </Card>
        )
      })}
    </div>
  );
};

export default ClassStream
