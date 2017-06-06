import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import Search from 'material-ui/svg-icons/action/search';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FilterList from 'material-ui/svg-icons/content/filter-list';

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

/*
  <div style={styles.wrapper}
    chips.map((item) => {
      return (
        <Chip key={item.key} style={styles.chip}>
          {item.text}
        </Chip>
      );
    })
  </div>
*/

const assignmentNames = [
  'Demand',
  'Supply',
  'Equlibrium',
  'Price Floor',
  'Price Ceiling',
]

const ClassStream = () => {
  return (
    <div className='classStream'>
      <Toolbar style={{marginBottom: 20}}>
        <ToolbarGroup>
          <TextField
            hintText='Search'
          />
          <IconButton>
            <Search />
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton
            label="Filter"
            icon={<FilterList />}
          />
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      <Card className='level1'>
        <CardText actAsExpander={true} className='streamCardCont'>
          <div className='cardInit'>
            <div className='cardInitItem'>
              <h1>10/12</h1>
            </div>
            <div className='cardInitItem'>
              <h1>10/12</h1>
            </div>
            <div className='cardInitItem'>
              <h1>10/12</h1>
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
          <div style={{width: '100%', height: 30, backgroundColor: 'red'}}></div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Reduce" />
          <FlatButton style={styles.turnInButton} label="Turn In" />
        </CardActions>
      </Card>
    </div>
  );
};

export default ClassStream
