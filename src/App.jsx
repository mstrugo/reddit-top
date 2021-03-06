import React from 'react';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Article, List } from './components';

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Route component={List} />
      </Grid>
      <Route path='article/:id'>
        <Grid item xs={12} sm={8}>
          <Article />
        </Grid>
      </Route>
    </Grid>
  );
}

export default App;
