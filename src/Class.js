import React from 'react';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

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

const Class = () => {
  return (
    <div>
      <div className='containerClass'>
        {classInfo.map(info => (
          <Subheader style={{marginBottom: 20, marginTop: 50}}>
            <h1 style={{marginTop: 0, marginBottom: 0}}>{info.title}</h1>
            <h3 style={{marginTop: 0, marginBottom: 0}}>{info.teacher}</h3>
            <h3 style={{marginTop: 0, marginBottom: 0}}>{info.description}</h3>
            <Divider />
          </Subheader>
        ))}
      </div>
    </div>
  );
};

export default Class
