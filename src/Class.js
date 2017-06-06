import React from 'react';

import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ClassStream from './ClassStream';
import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

import ActionList from 'material-ui/svg-icons/action/list';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import People from 'material-ui/svg-icons/social/people';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CreateContent from 'material-ui/svg-icons/content/create';
import Forum from 'material-ui/svg-icons/communication/forum';

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

const actionList = {
	items: [
		{
			primaryText: 'Create Post',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<ActionList />} />,
		},
		{
			primaryText: 'Create Assignment',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<ActionSettings />} />,
		},
    {
			primaryText: 'Create Assignment',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<ActionSettings />} />,
		},
    {
			primaryText: 'Create Discussion',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<Forum />} />,
		},
    {
			primaryText: 'Create Assignment',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<ActionSettings />} />,
		},
	],
};

const Class = () => {
  return (
    <div>
      <div className='containerClass'>
        <div className='classBody'>
          <div className='classMenu'>
            <Paper className='paperMenu'>
              {classInfo.map((info, index) => (
                <div key={index} className='classHeader'>
                  <h2>{info.title}</h2>
                  <h4>{info.teacher}</h4>
                  <h3>{info.description}</h3>
                </div>
              ))}
              <Menu autoWidth={true}>
                {menuList.items.map((item, index) => (
                  <MenuItem key={index} primaryText={item.primaryText} leftIcon={item.leftIcon} />
                ))}
              </Menu>
            </Paper>
          </div>
          <ClassStream />
        </div>
      </div>
      <SpeedDial hasBackdrop={false}>
  			<BubbleList>
  				{actionList.items.map((item, index) => {
  					return (
              <BubbleListItem
                key={index}
                primaryText={item.primaryText}
                rightAvatar={item.rightAvatar}
              />
            );
  				})}
  			</BubbleList>
  		</SpeedDial>
    </div>
  );
};

export default Class
