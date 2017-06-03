import React from 'react';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ClassStream from './ClassStream';

import ActionList from 'material-ui/svg-icons/action/list';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import People from 'material-ui/svg-icons/social/people';
import ActionSettings from 'material-ui/svg-icons/action/settings';

import './Class.css';

const classInfo = [
  {
    id: 1,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    avatar: 'some url'
  }
];

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0 32px 16px 0',
  },
};

const menuList = {
  items: [
    {
      primaryText: 'Stream',
      leftIcon: <ActionList />,
    },
    {
      primaryText: 'Filter',
      leftIcon: <FilterList />,
    },
    {
      primaryText: 'Grades',
      leftIcon: <ActionGrade />,
    },
    {
      primaryText: 'Classmates',
      leftIcon: <People />,
    },
    {
      primaryText: 'Class Settings',
      leftIcon: <ActionSettings />,
    },
  ]
}

const Class = () => {
  return (
    <div>
      <div className='containerClass'>
        {classInfo.map(info => (
          <Subheader className='classInfoCont'>
            <h1>{info.title}</h1>
            <h4>{info.teacher}</h4>
            <h3>{info.description}</h3>
            <Divider />
          </Subheader>
        ))}
        <div className='classBody'>
          <div className='classMenu'>
            <Paper style={style.paper}>
              <Menu autoWidth={true}>
                {menuList.items.map(item => (
                  <MenuItem primaryText={item.primaryText} leftIcon={item.leftIcon} />
                ))}
              </Menu>
            </Paper>
          </div>
          <ClassStream />
        </div>
      </div>
    </div>
  );
};

export default Class
