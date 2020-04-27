import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List as MuiList } from '@material-ui/core';
import * as posts from '../../mock.json';
import { actions } from '../../duck';
import { Item } from './item';

const ListBase = (props) => {
  const { savePosts, items = [] } = props;

  useEffect(() => {
    // TODO: Change for real API
    // const getPosts = async () =>
    //   await fetch(api)
    //     .then((res) => res.parseJson())
    //     .catch((err) => console.log(err));
    // const posts = getPosts();

    savePosts(posts);
  }, [savePosts]);

  return (
    <MuiList>
      {items.map(item => <Item />)}
    </MuiList>
  )
};

const mapStateToProps = (state) => ({
  // items: selectors.getPosts(state),
});

const mapActionsToProps = {
  savePosts: actions.savePosts,
};

const List = connect(
  mapStateToProps,
  mapActionsToProps,
)(ListBase);

export { List };
