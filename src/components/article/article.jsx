import React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';

const Article = ({ data }) => {
  // Destructure data
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardMedia></CardMedia>
      <CardContent></CardContent>
    </Card>
  );
};

export { Article };
