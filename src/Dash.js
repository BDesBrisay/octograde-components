import React from 'react';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Divider from 'material-ui/Divider';
import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

import './Dash.css';

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

const actionList = {
	items: [
		{
			primaryText: 'Join a Class',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<PersonAdd />} />,
		},
		{
			primaryText: 'Create a Class',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<CreateNewFolder />} />,
		},
	],
};

const Dash = () => {
  return (
    <div>
      <div className='containerDash'>
        <GridList style={{paddingTop: 70}} padding={30} cellHeight='auto' cols={4}>
          <Subheader style={{marginBottom: 20}}>
            <h1>Classes</h1>
            <Divider />
          </Subheader>
          {classes.map(classObj => (
            <Link to="/Class" style={{textDecoration: 'none'}}>
              <Card className='level1' style={{borderRadius: 4}} key={classObj.id}>
                <CardTitle title={classObj.title} subtitle={classObj.teacher} />
                <Divider />
                <CardText>{classObj.description}</CardText>
              </Card>
            </Link>
          ))}
        </GridList>
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

export default Dash
