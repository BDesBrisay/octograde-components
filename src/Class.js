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
import { List, ListItem } from 'material-ui';

import ActionList from 'material-ui/svg-icons/action/list';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import People from 'material-ui/svg-icons/social/people';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CreateContent from 'material-ui/svg-icons/content/create';
import Forum from 'material-ui/svg-icons/communication/forum';
import Beenhere from 'material-ui/svg-icons/maps/beenhere';
import Folder from 'material-ui/svg-icons/file/folder';
import Email from 'material-ui/svg-icons/communication/email';
import ActionEvent from 'material-ui/svg-icons/action/event';
import Help from 'material-ui/svg-icons/action/help';
import Announcement from 'material-ui/svg-icons/action/announcement';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Assignment from 'material-ui/svg-icons/action/assignment';

import './Class.css';

const classInfo = [
  {
    id: 1,
    title: 'English 110 Period 4',
    description: 'A regular college level english class',
    teacher: 'David Skrenta',
    teacherEmail: 'ThisTeacher@thisSchool.com',
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
      primaryText: 'Calendar',
      leftIcon: <ActionEvent />,
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
      primaryText: 'Attendance',
      leftIcon: <Beenhere />,
    },
    {
      primaryText: 'Class Drive',
      leftIcon: <Folder />,
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
			primaryText: 'Create Announcement',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<Announcement />} />,
		},
    {
			primaryText: 'Create Assessment',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<Assessment />} />,
		},
    {
			primaryText: 'Create Discussion',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<Forum />} />,
		},
    {
			primaryText: 'Create Assignment',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<Assignment />} />,
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
                  <p>{info.description}</p>
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

      <SpeedDial
        hasBackdrop={false}
        positionV='bottom'
        positionH='left'
        icon={<Help />}
      >
  			<Paper>
          <List>
            <Subheader>Help</Subheader>
    				{actionList.items.map((item, index) => {
    					return (<ListItem key={index} leftAvatar={item.rightAvatar} primaryText={item.primaryText} />);
    				})}
          </List>
  			</Paper>
  		</SpeedDial>

      <SpeedDial icon={<CreateContent />} hasBackdrop={false}>
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
