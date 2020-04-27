import * as types from './types';

const initState = {
  posts: [],
  active: '',
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case types.SAVE_POSTS:
      state.posts.push(action.payload.fetchedPosts);
      return state;

    case types.SET_ACTIVE:
      state.active = action.payload.id;
      return state;

    case types.REMOVE_POST:
      state.posts.slice(action.payload.id, 1);
      return state;

    case types.CLEAR_POSTS:
      state.posts.slice(0, state.posts.length);
      return state;

    default:
      return state;
  }
};

const rootReducer = () => ({
  reducers,
})


export { rootReducer };
