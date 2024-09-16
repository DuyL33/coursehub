import { Card, CardContent, Typography } from '@mui/material'; // Import Card components from Material-UI
import React from 'react';
const CourseCard = ({ course }) => {
  return (
    <Card 
    style={{
      height: '100%' ,
      textAlign: 'left',
      borderRadius: '1rem'
    }}>
      <CardContent>
        <Typography variant="h5" style={{ textDecoration: 'none' }}>{course.number}</Typography>
        <Typography variant="subtitle1" style={{ textDecoration: 'none' }}>{course.name}</Typography>
        <Typography variant="body2" style={{ textDecoration: 'none' }}>Credit: {course.credit}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard