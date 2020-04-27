import * as types from './types';

export const savePosts = (fetchedPosts) => ({
  type: types.SAVE_POSTS,
  payload: { fetchedPosts },
});

export const setActive = (id) => ({
  type: types.SET_ACTIVE,
  payload: { id },
});

export const removePost = (id) => ({
  type: types.REMOVE_POST,
  payload: { id },
});

export const clearPosts = () => ({
  type: types.CLEAR_POSTS,
});
