import React from 'react';

import TeacherDash from './TeacherDash';
import StudentDash from './StudentDash';

import './Dash.css';

const accountType = 1;

const Dash = () => {
  return accountType === 0 ? <TeacherDash /> : <StudentDash />
};

export default Dash
