import React from 'react';
import { Item } from './item';
import { List as MuiList } from '@material-ui/core';

const List = () => {
  const items = [];
  return (
    <MuiList>
      {items.map(item => <Item />)}
    </MuiList>
  )
};

export { List };
